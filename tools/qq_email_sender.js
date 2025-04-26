/**
 * QQ邮件发送demo
 * 使用前请先安装依赖：npm install nodemailer
 */

// 导入dotenv以读取环境变量
require("dotenv").config();
const nodemailer = require("nodemailer");

// 从.env文件获取邮箱配置
const EMAIL_USER = process.env.EMAIL_USER || "1186690660@qq.com";
const EMAIL_PASS = process.env.EMAIL_PASS || "zozokgohrnnuiifa";

// 创建邮件传输对象
const transporter = nodemailer.createTransport({
  service: "QQ", // 使用QQ邮箱服务
  host: "smtp.qq.com", // QQ邮箱SMTP服务器
  port: 465, // SMTP端口
  secure: true, // 使用SSL
  auth: {
    user: EMAIL_USER, // 从环境变量获取发件人QQ邮箱
    pass: EMAIL_PASS, // 从环境变量获取授权码
  },
});

/**
 * 发送邮件函数
 * @param {string} to - 收件人邮箱
 * @param {string} subject - 邮件主题
 * @param {string} text - 纯文本内容
 * @param {string} html - HTML内容
 * @returns {Promise<object>} - 发送结果
 */
async function sendEmail(to, subject, text, html) {
  try {
    // 邮件选项
    const mailOptions = {
      from: EMAIL_USER, // 发件人地址
      to, // 收件人地址
      subject, // 邮件主题
      text, // 纯文本内容（可选）
      html, // HTML内容（可选）
    };

    // 发送邮件
    const info = await transporter.sendMail(mailOptions);
    console.log("邮件发送成功:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("邮件发送失败:", error);
    return { success: false, error: error.message };
  }
}

/**
 * 生成随机验证码
 * @param {number} length - 验证码长度，默认为6
 * @returns {string} - 生成的验证码
 */
function generateVerificationCode(length = 6) {
  const chars = "0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

/**
 * 发送验证码邮件
 * @param {string} to - 收件人邮箱
 * @param {string} code - 验证码
 * @param {string} username - 用户名（可选）
 * @returns {Promise<object>} - 发送结果
 */
async function sendVerificationEmail(to, code, username = "") {
  const subject = "注册账号验证码";
  const text = `您的验证码是: ${code}，有效期10分钟，请勿泄露给他人。`;
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e8e8e8; border-radius: 5px;">
      <h2 style="color: #333; text-align: center; border-bottom: 1px solid #eee; padding-bottom: 10px;">注册账号验证码</h2>
      <p style="color: #666;">尊敬的${username ? username : "用户"}：</p>
      <p style="color: #666;">您正在注册我们的服务，请使用以下验证码完成邮箱验证：</p>
      <div style="background-color: #f7f7f7; padding: 15px; text-align: center; font-size: 24px; font-weight: bold; letter-spacing: 5px; margin: 20px 0; border-radius: 4px;">
        ${code}
      </div>
      <p style="color: #666;">此验证码将在10分钟后失效，请勿将验证码泄露给他人。</p>
      <p style="color: #666;">如果您没有进行此操作，请忽略此邮件。</p>
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #999; font-size: 12px;">
        <p>此邮件由系统自动发送，请勿回复</p>
      </div>
    </div>
  `;

  return await sendEmail(to, subject, text, html);
}

/**
 * 使用示例
 */
async function runExample() {
  const code = generateVerificationCode();
  const result = await sendVerificationEmail(
    "my7btc@outlook.com", // 收件人邮箱
    code,
    "测试用户"
  );

  console.log("发送结果:", result);
}

/**
 * 直接运行脚本时执行示例
 * 如果是作为模块导入，则不会自动执行
 */
if (require.main === module) {
  console.log("开始发送测试邮件...");
  runExample();
}

// 导出功能以便其他模块使用
module.exports = {
  sendEmail,
  generateVerificationCode,
  sendVerificationEmail,
};
