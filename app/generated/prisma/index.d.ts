
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationCode
 * 
 */
export type VerificationCode = $Result.DefaultSelection<Prisma.$VerificationCodePayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model StudyPlan
 * 
 */
export type StudyPlan = $Result.DefaultSelection<Prisma.$StudyPlanPayload>
/**
 * Model StudyItem
 * 
 */
export type StudyItem = $Result.DefaultSelection<Prisma.$StudyItemPayload>
/**
 * Model StudyLog
 * 
 */
export type StudyLog = $Result.DefaultSelection<Prisma.$StudyLogPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model TaskTag
 * 
 */
export type TaskTag = $Result.DefaultSelection<Prisma.$TaskTagPayload>
/**
 * Model PlanTag
 * 
 */
export type PlanTag = $Result.DefaultSelection<Prisma.$PlanTagPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TaskStatus: {
  pending: 'pending',
  in_progress: 'in_progress',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const Priority: {
  low: 'low',
  medium: 'medium',
  high: 'high'
};

export type Priority = (typeof Priority)[keyof typeof Priority]


export const PlanStatus: {
  active: 'active',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type PlanStatus = (typeof PlanStatus)[keyof typeof PlanStatus]


export const ItemStatus: {
  not_started: 'not_started',
  in_progress: 'in_progress',
  completed: 'completed'
};

export type ItemStatus = (typeof ItemStatus)[keyof typeof ItemStatus]

}

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

export type PlanStatus = $Enums.PlanStatus

export const PlanStatus: typeof $Enums.PlanStatus

export type ItemStatus = $Enums.ItemStatus

export const ItemStatus: typeof $Enums.ItemStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationCode`: Exposes CRUD operations for the **VerificationCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationCodes
    * const verificationCodes = await prisma.verificationCode.findMany()
    * ```
    */
  get verificationCode(): Prisma.VerificationCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studyPlan`: Exposes CRUD operations for the **StudyPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudyPlans
    * const studyPlans = await prisma.studyPlan.findMany()
    * ```
    */
  get studyPlan(): Prisma.StudyPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studyItem`: Exposes CRUD operations for the **StudyItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudyItems
    * const studyItems = await prisma.studyItem.findMany()
    * ```
    */
  get studyItem(): Prisma.StudyItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studyLog`: Exposes CRUD operations for the **StudyLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudyLogs
    * const studyLogs = await prisma.studyLog.findMany()
    * ```
    */
  get studyLog(): Prisma.StudyLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskTag`: Exposes CRUD operations for the **TaskTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskTags
    * const taskTags = await prisma.taskTag.findMany()
    * ```
    */
  get taskTag(): Prisma.TaskTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.planTag`: Exposes CRUD operations for the **PlanTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlanTags
    * const planTags = await prisma.planTag.findMany()
    * ```
    */
  get planTag(): Prisma.PlanTagDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    VerificationCode: 'VerificationCode',
    Task: 'Task',
    StudyPlan: 'StudyPlan',
    StudyItem: 'StudyItem',
    StudyLog: 'StudyLog',
    Tag: 'Tag',
    TaskTag: 'TaskTag',
    PlanTag: 'PlanTag'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "verificationCode" | "task" | "studyPlan" | "studyItem" | "studyLog" | "tag" | "taskTag" | "planTag"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationCode: {
        payload: Prisma.$VerificationCodePayload<ExtArgs>
        fields: Prisma.VerificationCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          findFirst: {
            args: Prisma.VerificationCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          findMany: {
            args: Prisma.VerificationCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>[]
          }
          create: {
            args: Prisma.VerificationCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          createMany: {
            args: Prisma.VerificationCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>[]
          }
          delete: {
            args: Prisma.VerificationCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          update: {
            args: Prisma.VerificationCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          deleteMany: {
            args: Prisma.VerificationCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>[]
          }
          upsert: {
            args: Prisma.VerificationCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          aggregate: {
            args: Prisma.VerificationCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationCode>
          }
          groupBy: {
            args: Prisma.VerificationCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCodeCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCodeCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      StudyPlan: {
        payload: Prisma.$StudyPlanPayload<ExtArgs>
        fields: Prisma.StudyPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudyPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudyPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>
          }
          findFirst: {
            args: Prisma.StudyPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudyPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>
          }
          findMany: {
            args: Prisma.StudyPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>[]
          }
          create: {
            args: Prisma.StudyPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>
          }
          createMany: {
            args: Prisma.StudyPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudyPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>[]
          }
          delete: {
            args: Prisma.StudyPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>
          }
          update: {
            args: Prisma.StudyPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>
          }
          deleteMany: {
            args: Prisma.StudyPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudyPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudyPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>[]
          }
          upsert: {
            args: Prisma.StudyPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>
          }
          aggregate: {
            args: Prisma.StudyPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudyPlan>
          }
          groupBy: {
            args: Prisma.StudyPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudyPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudyPlanCountArgs<ExtArgs>
            result: $Utils.Optional<StudyPlanCountAggregateOutputType> | number
          }
        }
      }
      StudyItem: {
        payload: Prisma.$StudyItemPayload<ExtArgs>
        fields: Prisma.StudyItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudyItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudyItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyItemPayload>
          }
          findFirst: {
            args: Prisma.StudyItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudyItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyItemPayload>
          }
          findMany: {
            args: Prisma.StudyItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyItemPayload>[]
          }
          create: {
            args: Prisma.StudyItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyItemPayload>
          }
          createMany: {
            args: Prisma.StudyItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudyItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyItemPayload>[]
          }
          delete: {
            args: Prisma.StudyItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyItemPayload>
          }
          update: {
            args: Prisma.StudyItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyItemPayload>
          }
          deleteMany: {
            args: Prisma.StudyItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudyItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudyItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyItemPayload>[]
          }
          upsert: {
            args: Prisma.StudyItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyItemPayload>
          }
          aggregate: {
            args: Prisma.StudyItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudyItem>
          }
          groupBy: {
            args: Prisma.StudyItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudyItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudyItemCountArgs<ExtArgs>
            result: $Utils.Optional<StudyItemCountAggregateOutputType> | number
          }
        }
      }
      StudyLog: {
        payload: Prisma.$StudyLogPayload<ExtArgs>
        fields: Prisma.StudyLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudyLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudyLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyLogPayload>
          }
          findFirst: {
            args: Prisma.StudyLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudyLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyLogPayload>
          }
          findMany: {
            args: Prisma.StudyLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyLogPayload>[]
          }
          create: {
            args: Prisma.StudyLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyLogPayload>
          }
          createMany: {
            args: Prisma.StudyLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudyLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyLogPayload>[]
          }
          delete: {
            args: Prisma.StudyLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyLogPayload>
          }
          update: {
            args: Prisma.StudyLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyLogPayload>
          }
          deleteMany: {
            args: Prisma.StudyLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudyLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudyLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyLogPayload>[]
          }
          upsert: {
            args: Prisma.StudyLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyLogPayload>
          }
          aggregate: {
            args: Prisma.StudyLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudyLog>
          }
          groupBy: {
            args: Prisma.StudyLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudyLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudyLogCountArgs<ExtArgs>
            result: $Utils.Optional<StudyLogCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      TaskTag: {
        payload: Prisma.$TaskTagPayload<ExtArgs>
        fields: Prisma.TaskTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>
          }
          findFirst: {
            args: Prisma.TaskTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>
          }
          findMany: {
            args: Prisma.TaskTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>[]
          }
          create: {
            args: Prisma.TaskTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>
          }
          createMany: {
            args: Prisma.TaskTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>[]
          }
          delete: {
            args: Prisma.TaskTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>
          }
          update: {
            args: Prisma.TaskTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>
          }
          deleteMany: {
            args: Prisma.TaskTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>[]
          }
          upsert: {
            args: Prisma.TaskTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>
          }
          aggregate: {
            args: Prisma.TaskTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskTag>
          }
          groupBy: {
            args: Prisma.TaskTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskTagCountArgs<ExtArgs>
            result: $Utils.Optional<TaskTagCountAggregateOutputType> | number
          }
        }
      }
      PlanTag: {
        payload: Prisma.$PlanTagPayload<ExtArgs>
        fields: Prisma.PlanTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTagPayload>
          }
          findFirst: {
            args: Prisma.PlanTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTagPayload>
          }
          findMany: {
            args: Prisma.PlanTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTagPayload>[]
          }
          create: {
            args: Prisma.PlanTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTagPayload>
          }
          createMany: {
            args: Prisma.PlanTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTagPayload>[]
          }
          delete: {
            args: Prisma.PlanTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTagPayload>
          }
          update: {
            args: Prisma.PlanTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTagPayload>
          }
          deleteMany: {
            args: Prisma.PlanTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTagPayload>[]
          }
          upsert: {
            args: Prisma.PlanTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTagPayload>
          }
          aggregate: {
            args: Prisma.PlanTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanTag>
          }
          groupBy: {
            args: Prisma.PlanTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanTagCountArgs<ExtArgs>
            result: $Utils.Optional<PlanTagCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    verificationCode?: VerificationCodeOmit
    task?: TaskOmit
    studyPlan?: StudyPlanOmit
    studyItem?: StudyItemOmit
    studyLog?: StudyLogOmit
    tag?: TagOmit
    taskTag?: TaskTagOmit
    planTag?: PlanTagOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tasks: number
    studyPlans: number
    tags: number
    verificationCodes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | UserCountOutputTypeCountTasksArgs
    studyPlans?: boolean | UserCountOutputTypeCountStudyPlansArgs
    tags?: boolean | UserCountOutputTypeCountTagsArgs
    verificationCodes?: boolean | UserCountOutputTypeCountVerificationCodesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudyPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyPlanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVerificationCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationCodeWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    taskTags: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taskTags?: boolean | TaskCountOutputTypeCountTaskTagsArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountTaskTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskTagWhereInput
  }


  /**
   * Count Type StudyPlanCountOutputType
   */

  export type StudyPlanCountOutputType = {
    studyItems: number
    planTags: number
  }

  export type StudyPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studyItems?: boolean | StudyPlanCountOutputTypeCountStudyItemsArgs
    planTags?: boolean | StudyPlanCountOutputTypeCountPlanTagsArgs
  }

  // Custom InputTypes
  /**
   * StudyPlanCountOutputType without action
   */
  export type StudyPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlanCountOutputType
     */
    select?: StudyPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudyPlanCountOutputType without action
   */
  export type StudyPlanCountOutputTypeCountStudyItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyItemWhereInput
  }

  /**
   * StudyPlanCountOutputType without action
   */
  export type StudyPlanCountOutputTypeCountPlanTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanTagWhereInput
  }


  /**
   * Count Type StudyItemCountOutputType
   */

  export type StudyItemCountOutputType = {
    studyLogs: number
  }

  export type StudyItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studyLogs?: boolean | StudyItemCountOutputTypeCountStudyLogsArgs
  }

  // Custom InputTypes
  /**
   * StudyItemCountOutputType without action
   */
  export type StudyItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyItemCountOutputType
     */
    select?: StudyItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudyItemCountOutputType without action
   */
  export type StudyItemCountOutputTypeCountStudyLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyLogWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    taskTags: number
    planTags: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taskTags?: boolean | TagCountOutputTypeCountTaskTagsArgs
    planTags?: boolean | TagCountOutputTypeCountPlanTagsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountTaskTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskTagWhereInput
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountPlanTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanTagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    emailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    emailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    emailVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    emailVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tasks?: boolean | User$tasksArgs<ExtArgs>
    studyPlans?: boolean | User$studyPlansArgs<ExtArgs>
    tags?: boolean | User$tagsArgs<ExtArgs>
    verificationCodes?: boolean | User$verificationCodesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "emailVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | User$tasksArgs<ExtArgs>
    studyPlans?: boolean | User$studyPlansArgs<ExtArgs>
    tags?: boolean | User$tagsArgs<ExtArgs>
    verificationCodes?: boolean | User$verificationCodesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      studyPlans: Prisma.$StudyPlanPayload<ExtArgs>[]
      tags: Prisma.$TagPayload<ExtArgs>[]
      verificationCodes: Prisma.$VerificationCodePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      emailVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends User$tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studyPlans<T extends User$studyPlansArgs<ExtArgs> = {}>(args?: Subset<T, User$studyPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends User$tagsArgs<ExtArgs> = {}>(args?: Subset<T, User$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    verificationCodes<T extends User$verificationCodesArgs<ExtArgs> = {}>(args?: Subset<T, User$verificationCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.tasks
   */
  export type User$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.studyPlans
   */
  export type User$studyPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    where?: StudyPlanWhereInput
    orderBy?: StudyPlanOrderByWithRelationInput | StudyPlanOrderByWithRelationInput[]
    cursor?: StudyPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudyPlanScalarFieldEnum | StudyPlanScalarFieldEnum[]
  }

  /**
   * User.tags
   */
  export type User$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * User.verificationCodes
   */
  export type User$verificationCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    where?: VerificationCodeWhereInput
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    cursor?: VerificationCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationCode
   */

  export type AggregateVerificationCode = {
    _count: VerificationCodeCountAggregateOutputType | null
    _avg: VerificationCodeAvgAggregateOutputType | null
    _sum: VerificationCodeSumAggregateOutputType | null
    _min: VerificationCodeMinAggregateOutputType | null
    _max: VerificationCodeMaxAggregateOutputType | null
  }

  export type VerificationCodeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type VerificationCodeSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type VerificationCodeMinAggregateOutputType = {
    id: number | null
    email: string | null
    code: string | null
    expiresAt: Date | null
    createdAt: Date | null
    userId: number | null
  }

  export type VerificationCodeMaxAggregateOutputType = {
    id: number | null
    email: string | null
    code: string | null
    expiresAt: Date | null
    createdAt: Date | null
    userId: number | null
  }

  export type VerificationCodeCountAggregateOutputType = {
    id: number
    email: number
    code: number
    expiresAt: number
    createdAt: number
    userId: number
    _all: number
  }


  export type VerificationCodeAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type VerificationCodeSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type VerificationCodeMinAggregateInputType = {
    id?: true
    email?: true
    code?: true
    expiresAt?: true
    createdAt?: true
    userId?: true
  }

  export type VerificationCodeMaxAggregateInputType = {
    id?: true
    email?: true
    code?: true
    expiresAt?: true
    createdAt?: true
    userId?: true
  }

  export type VerificationCodeCountAggregateInputType = {
    id?: true
    email?: true
    code?: true
    expiresAt?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type VerificationCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationCode to aggregate.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationCodes
    **/
    _count?: true | VerificationCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VerificationCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VerificationCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationCodeMaxAggregateInputType
  }

  export type GetVerificationCodeAggregateType<T extends VerificationCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationCode[P]>
      : GetScalarType<T[P], AggregateVerificationCode[P]>
  }




  export type VerificationCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationCodeWhereInput
    orderBy?: VerificationCodeOrderByWithAggregationInput | VerificationCodeOrderByWithAggregationInput[]
    by: VerificationCodeScalarFieldEnum[] | VerificationCodeScalarFieldEnum
    having?: VerificationCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCodeCountAggregateInputType | true
    _avg?: VerificationCodeAvgAggregateInputType
    _sum?: VerificationCodeSumAggregateInputType
    _min?: VerificationCodeMinAggregateInputType
    _max?: VerificationCodeMaxAggregateInputType
  }

  export type VerificationCodeGroupByOutputType = {
    id: number
    email: string
    code: string
    expiresAt: Date
    createdAt: Date
    userId: number | null
    _count: VerificationCodeCountAggregateOutputType | null
    _avg: VerificationCodeAvgAggregateOutputType | null
    _sum: VerificationCodeSumAggregateOutputType | null
    _min: VerificationCodeMinAggregateOutputType | null
    _max: VerificationCodeMaxAggregateOutputType | null
  }

  type GetVerificationCodeGroupByPayload<T extends VerificationCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationCodeGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationCodeGroupByOutputType[P]>
        }
      >
    >


  export type VerificationCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    code?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | VerificationCode$userArgs<ExtArgs>
  }, ExtArgs["result"]["verificationCode"]>

  export type VerificationCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    code?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | VerificationCode$userArgs<ExtArgs>
  }, ExtArgs["result"]["verificationCode"]>

  export type VerificationCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    code?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | VerificationCode$userArgs<ExtArgs>
  }, ExtArgs["result"]["verificationCode"]>

  export type VerificationCodeSelectScalar = {
    id?: boolean
    email?: boolean
    code?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type VerificationCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "code" | "expiresAt" | "createdAt" | "userId", ExtArgs["result"]["verificationCode"]>
  export type VerificationCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | VerificationCode$userArgs<ExtArgs>
  }
  export type VerificationCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | VerificationCode$userArgs<ExtArgs>
  }
  export type VerificationCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | VerificationCode$userArgs<ExtArgs>
  }

  export type $VerificationCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationCode"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      code: string
      expiresAt: Date
      createdAt: Date
      userId: number | null
    }, ExtArgs["result"]["verificationCode"]>
    composites: {}
  }

  type VerificationCodeGetPayload<S extends boolean | null | undefined | VerificationCodeDefaultArgs> = $Result.GetResult<Prisma.$VerificationCodePayload, S>

  type VerificationCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCodeCountAggregateInputType | true
    }

  export interface VerificationCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationCode'], meta: { name: 'VerificationCode' } }
    /**
     * Find zero or one VerificationCode that matches the filter.
     * @param {VerificationCodeFindUniqueArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationCodeFindUniqueArgs>(args: SelectSubset<T, VerificationCodeFindUniqueArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationCodeFindUniqueOrThrowArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindFirstArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationCodeFindFirstArgs>(args?: SelectSubset<T, VerificationCodeFindFirstArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindFirstOrThrowArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationCodes
     * const verificationCodes = await prisma.verificationCode.findMany()
     * 
     * // Get first 10 VerificationCodes
     * const verificationCodes = await prisma.verificationCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationCodeWithIdOnly = await prisma.verificationCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationCodeFindManyArgs>(args?: SelectSubset<T, VerificationCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationCode.
     * @param {VerificationCodeCreateArgs} args - Arguments to create a VerificationCode.
     * @example
     * // Create one VerificationCode
     * const VerificationCode = await prisma.verificationCode.create({
     *   data: {
     *     // ... data to create a VerificationCode
     *   }
     * })
     * 
     */
    create<T extends VerificationCodeCreateArgs>(args: SelectSubset<T, VerificationCodeCreateArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationCodes.
     * @param {VerificationCodeCreateManyArgs} args - Arguments to create many VerificationCodes.
     * @example
     * // Create many VerificationCodes
     * const verificationCode = await prisma.verificationCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCodeCreateManyArgs>(args?: SelectSubset<T, VerificationCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationCodes and returns the data saved in the database.
     * @param {VerificationCodeCreateManyAndReturnArgs} args - Arguments to create many VerificationCodes.
     * @example
     * // Create many VerificationCodes
     * const verificationCode = await prisma.verificationCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationCodes and only return the `id`
     * const verificationCodeWithIdOnly = await prisma.verificationCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationCode.
     * @param {VerificationCodeDeleteArgs} args - Arguments to delete one VerificationCode.
     * @example
     * // Delete one VerificationCode
     * const VerificationCode = await prisma.verificationCode.delete({
     *   where: {
     *     // ... filter to delete one VerificationCode
     *   }
     * })
     * 
     */
    delete<T extends VerificationCodeDeleteArgs>(args: SelectSubset<T, VerificationCodeDeleteArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationCode.
     * @param {VerificationCodeUpdateArgs} args - Arguments to update one VerificationCode.
     * @example
     * // Update one VerificationCode
     * const verificationCode = await prisma.verificationCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationCodeUpdateArgs>(args: SelectSubset<T, VerificationCodeUpdateArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationCodes.
     * @param {VerificationCodeDeleteManyArgs} args - Arguments to filter VerificationCodes to delete.
     * @example
     * // Delete a few VerificationCodes
     * const { count } = await prisma.verificationCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationCodeDeleteManyArgs>(args?: SelectSubset<T, VerificationCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationCodes
     * const verificationCode = await prisma.verificationCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationCodeUpdateManyArgs>(args: SelectSubset<T, VerificationCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationCodes and returns the data updated in the database.
     * @param {VerificationCodeUpdateManyAndReturnArgs} args - Arguments to update many VerificationCodes.
     * @example
     * // Update many VerificationCodes
     * const verificationCode = await prisma.verificationCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationCodes and only return the `id`
     * const verificationCodeWithIdOnly = await prisma.verificationCode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationCode.
     * @param {VerificationCodeUpsertArgs} args - Arguments to update or create a VerificationCode.
     * @example
     * // Update or create a VerificationCode
     * const verificationCode = await prisma.verificationCode.upsert({
     *   create: {
     *     // ... data to create a VerificationCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationCode we want to update
     *   }
     * })
     */
    upsert<T extends VerificationCodeUpsertArgs>(args: SelectSubset<T, VerificationCodeUpsertArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeCountArgs} args - Arguments to filter VerificationCodes to count.
     * @example
     * // Count the number of VerificationCodes
     * const count = await prisma.verificationCode.count({
     *   where: {
     *     // ... the filter for the VerificationCodes we want to count
     *   }
     * })
    **/
    count<T extends VerificationCodeCountArgs>(
      args?: Subset<T, VerificationCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationCodeAggregateArgs>(args: Subset<T, VerificationCodeAggregateArgs>): Prisma.PrismaPromise<GetVerificationCodeAggregateType<T>>

    /**
     * Group by VerificationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationCodeGroupByArgs['orderBy'] }
        : { orderBy?: VerificationCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationCode model
   */
  readonly fields: VerificationCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends VerificationCode$userArgs<ExtArgs> = {}>(args?: Subset<T, VerificationCode$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationCode model
   */
  interface VerificationCodeFieldRefs {
    readonly id: FieldRef<"VerificationCode", 'Int'>
    readonly email: FieldRef<"VerificationCode", 'String'>
    readonly code: FieldRef<"VerificationCode", 'String'>
    readonly expiresAt: FieldRef<"VerificationCode", 'DateTime'>
    readonly createdAt: FieldRef<"VerificationCode", 'DateTime'>
    readonly userId: FieldRef<"VerificationCode", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * VerificationCode findUnique
   */
  export type VerificationCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode findUniqueOrThrow
   */
  export type VerificationCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode findFirst
   */
  export type VerificationCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationCodes.
     */
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode findFirstOrThrow
   */
  export type VerificationCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationCodes.
     */
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode findMany
   */
  export type VerificationCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCodes to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode create
   */
  export type VerificationCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a VerificationCode.
     */
    data: XOR<VerificationCodeCreateInput, VerificationCodeUncheckedCreateInput>
  }

  /**
   * VerificationCode createMany
   */
  export type VerificationCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationCodes.
     */
    data: VerificationCodeCreateManyInput | VerificationCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationCode createManyAndReturn
   */
  export type VerificationCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationCodes.
     */
    data: VerificationCodeCreateManyInput | VerificationCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationCode update
   */
  export type VerificationCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a VerificationCode.
     */
    data: XOR<VerificationCodeUpdateInput, VerificationCodeUncheckedUpdateInput>
    /**
     * Choose, which VerificationCode to update.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode updateMany
   */
  export type VerificationCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationCodes.
     */
    data: XOR<VerificationCodeUpdateManyMutationInput, VerificationCodeUncheckedUpdateManyInput>
    /**
     * Filter which VerificationCodes to update
     */
    where?: VerificationCodeWhereInput
    /**
     * Limit how many VerificationCodes to update.
     */
    limit?: number
  }

  /**
   * VerificationCode updateManyAndReturn
   */
  export type VerificationCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The data used to update VerificationCodes.
     */
    data: XOR<VerificationCodeUpdateManyMutationInput, VerificationCodeUncheckedUpdateManyInput>
    /**
     * Filter which VerificationCodes to update
     */
    where?: VerificationCodeWhereInput
    /**
     * Limit how many VerificationCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationCode upsert
   */
  export type VerificationCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the VerificationCode to update in case it exists.
     */
    where: VerificationCodeWhereUniqueInput
    /**
     * In case the VerificationCode found by the `where` argument doesn't exist, create a new VerificationCode with this data.
     */
    create: XOR<VerificationCodeCreateInput, VerificationCodeUncheckedCreateInput>
    /**
     * In case the VerificationCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationCodeUpdateInput, VerificationCodeUncheckedUpdateInput>
  }

  /**
   * VerificationCode delete
   */
  export type VerificationCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter which VerificationCode to delete.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode deleteMany
   */
  export type VerificationCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationCodes to delete
     */
    where?: VerificationCodeWhereInput
    /**
     * Limit how many VerificationCodes to delete.
     */
    limit?: number
  }

  /**
   * VerificationCode.user
   */
  export type VerificationCode$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * VerificationCode without action
   */
  export type VerificationCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    description: string | null
    status: $Enums.TaskStatus | null
    priority: $Enums.Priority | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    description: string | null
    status: $Enums.TaskStatus | null
    priority: $Enums.Priority | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    status: number
    priority: number
    dueDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: number
    userId: number
    title: string
    description: string | null
    status: $Enums.TaskStatus
    priority: $Enums.Priority
    dueDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    taskTags?: boolean | Task$taskTagsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "description" | "status" | "priority" | "dueDate" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    taskTags?: boolean | Task$taskTagsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      taskTags: Prisma.$TaskTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      title: string
      description: string | null
      status: $Enums.TaskStatus
      priority: $Enums.Priority
      dueDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    taskTags<T extends Task$taskTagsArgs<ExtArgs> = {}>(args?: Subset<T, Task$taskTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'Int'>
    readonly userId: FieldRef<"Task", 'Int'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly priority: FieldRef<"Task", 'Priority'>
    readonly dueDate: FieldRef<"Task", 'DateTime'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.taskTags
   */
  export type Task$taskTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    where?: TaskTagWhereInput
    orderBy?: TaskTagOrderByWithRelationInput | TaskTagOrderByWithRelationInput[]
    cursor?: TaskTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskTagScalarFieldEnum | TaskTagScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model StudyPlan
   */

  export type AggregateStudyPlan = {
    _count: StudyPlanCountAggregateOutputType | null
    _avg: StudyPlanAvgAggregateOutputType | null
    _sum: StudyPlanSumAggregateOutputType | null
    _min: StudyPlanMinAggregateOutputType | null
    _max: StudyPlanMaxAggregateOutputType | null
  }

  export type StudyPlanAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type StudyPlanSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type StudyPlanMinAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.PlanStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudyPlanMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.PlanStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudyPlanCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    startDate: number
    endDate: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudyPlanAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type StudyPlanSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type StudyPlanMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudyPlanMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudyPlanCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudyPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudyPlan to aggregate.
     */
    where?: StudyPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyPlans to fetch.
     */
    orderBy?: StudyPlanOrderByWithRelationInput | StudyPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudyPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudyPlans
    **/
    _count?: true | StudyPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudyPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudyPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudyPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudyPlanMaxAggregateInputType
  }

  export type GetStudyPlanAggregateType<T extends StudyPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateStudyPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudyPlan[P]>
      : GetScalarType<T[P], AggregateStudyPlan[P]>
  }




  export type StudyPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyPlanWhereInput
    orderBy?: StudyPlanOrderByWithAggregationInput | StudyPlanOrderByWithAggregationInput[]
    by: StudyPlanScalarFieldEnum[] | StudyPlanScalarFieldEnum
    having?: StudyPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudyPlanCountAggregateInputType | true
    _avg?: StudyPlanAvgAggregateInputType
    _sum?: StudyPlanSumAggregateInputType
    _min?: StudyPlanMinAggregateInputType
    _max?: StudyPlanMaxAggregateInputType
  }

  export type StudyPlanGroupByOutputType = {
    id: number
    userId: number
    title: string
    description: string | null
    startDate: Date
    endDate: Date | null
    status: $Enums.PlanStatus
    createdAt: Date
    updatedAt: Date
    _count: StudyPlanCountAggregateOutputType | null
    _avg: StudyPlanAvgAggregateOutputType | null
    _sum: StudyPlanSumAggregateOutputType | null
    _min: StudyPlanMinAggregateOutputType | null
    _max: StudyPlanMaxAggregateOutputType | null
  }

  type GetStudyPlanGroupByPayload<T extends StudyPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudyPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudyPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudyPlanGroupByOutputType[P]>
            : GetScalarType<T[P], StudyPlanGroupByOutputType[P]>
        }
      >
    >


  export type StudyPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    studyItems?: boolean | StudyPlan$studyItemsArgs<ExtArgs>
    planTags?: boolean | StudyPlan$planTagsArgs<ExtArgs>
    _count?: boolean | StudyPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyPlan"]>

  export type StudyPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyPlan"]>

  export type StudyPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyPlan"]>

  export type StudyPlanSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudyPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "description" | "startDate" | "endDate" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["studyPlan"]>
  export type StudyPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    studyItems?: boolean | StudyPlan$studyItemsArgs<ExtArgs>
    planTags?: boolean | StudyPlan$planTagsArgs<ExtArgs>
    _count?: boolean | StudyPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudyPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudyPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StudyPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudyPlan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      studyItems: Prisma.$StudyItemPayload<ExtArgs>[]
      planTags: Prisma.$PlanTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      title: string
      description: string | null
      startDate: Date
      endDate: Date | null
      status: $Enums.PlanStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studyPlan"]>
    composites: {}
  }

  type StudyPlanGetPayload<S extends boolean | null | undefined | StudyPlanDefaultArgs> = $Result.GetResult<Prisma.$StudyPlanPayload, S>

  type StudyPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudyPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudyPlanCountAggregateInputType | true
    }

  export interface StudyPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudyPlan'], meta: { name: 'StudyPlan' } }
    /**
     * Find zero or one StudyPlan that matches the filter.
     * @param {StudyPlanFindUniqueArgs} args - Arguments to find a StudyPlan
     * @example
     * // Get one StudyPlan
     * const studyPlan = await prisma.studyPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudyPlanFindUniqueArgs>(args: SelectSubset<T, StudyPlanFindUniqueArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudyPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudyPlanFindUniqueOrThrowArgs} args - Arguments to find a StudyPlan
     * @example
     * // Get one StudyPlan
     * const studyPlan = await prisma.studyPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudyPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, StudyPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudyPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyPlanFindFirstArgs} args - Arguments to find a StudyPlan
     * @example
     * // Get one StudyPlan
     * const studyPlan = await prisma.studyPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudyPlanFindFirstArgs>(args?: SelectSubset<T, StudyPlanFindFirstArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudyPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyPlanFindFirstOrThrowArgs} args - Arguments to find a StudyPlan
     * @example
     * // Get one StudyPlan
     * const studyPlan = await prisma.studyPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudyPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, StudyPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudyPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudyPlans
     * const studyPlans = await prisma.studyPlan.findMany()
     * 
     * // Get first 10 StudyPlans
     * const studyPlans = await prisma.studyPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studyPlanWithIdOnly = await prisma.studyPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudyPlanFindManyArgs>(args?: SelectSubset<T, StudyPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudyPlan.
     * @param {StudyPlanCreateArgs} args - Arguments to create a StudyPlan.
     * @example
     * // Create one StudyPlan
     * const StudyPlan = await prisma.studyPlan.create({
     *   data: {
     *     // ... data to create a StudyPlan
     *   }
     * })
     * 
     */
    create<T extends StudyPlanCreateArgs>(args: SelectSubset<T, StudyPlanCreateArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudyPlans.
     * @param {StudyPlanCreateManyArgs} args - Arguments to create many StudyPlans.
     * @example
     * // Create many StudyPlans
     * const studyPlan = await prisma.studyPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudyPlanCreateManyArgs>(args?: SelectSubset<T, StudyPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudyPlans and returns the data saved in the database.
     * @param {StudyPlanCreateManyAndReturnArgs} args - Arguments to create many StudyPlans.
     * @example
     * // Create many StudyPlans
     * const studyPlan = await prisma.studyPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudyPlans and only return the `id`
     * const studyPlanWithIdOnly = await prisma.studyPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudyPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, StudyPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudyPlan.
     * @param {StudyPlanDeleteArgs} args - Arguments to delete one StudyPlan.
     * @example
     * // Delete one StudyPlan
     * const StudyPlan = await prisma.studyPlan.delete({
     *   where: {
     *     // ... filter to delete one StudyPlan
     *   }
     * })
     * 
     */
    delete<T extends StudyPlanDeleteArgs>(args: SelectSubset<T, StudyPlanDeleteArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudyPlan.
     * @param {StudyPlanUpdateArgs} args - Arguments to update one StudyPlan.
     * @example
     * // Update one StudyPlan
     * const studyPlan = await prisma.studyPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudyPlanUpdateArgs>(args: SelectSubset<T, StudyPlanUpdateArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudyPlans.
     * @param {StudyPlanDeleteManyArgs} args - Arguments to filter StudyPlans to delete.
     * @example
     * // Delete a few StudyPlans
     * const { count } = await prisma.studyPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudyPlanDeleteManyArgs>(args?: SelectSubset<T, StudyPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudyPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudyPlans
     * const studyPlan = await prisma.studyPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudyPlanUpdateManyArgs>(args: SelectSubset<T, StudyPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudyPlans and returns the data updated in the database.
     * @param {StudyPlanUpdateManyAndReturnArgs} args - Arguments to update many StudyPlans.
     * @example
     * // Update many StudyPlans
     * const studyPlan = await prisma.studyPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudyPlans and only return the `id`
     * const studyPlanWithIdOnly = await prisma.studyPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudyPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, StudyPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudyPlan.
     * @param {StudyPlanUpsertArgs} args - Arguments to update or create a StudyPlan.
     * @example
     * // Update or create a StudyPlan
     * const studyPlan = await prisma.studyPlan.upsert({
     *   create: {
     *     // ... data to create a StudyPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudyPlan we want to update
     *   }
     * })
     */
    upsert<T extends StudyPlanUpsertArgs>(args: SelectSubset<T, StudyPlanUpsertArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudyPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyPlanCountArgs} args - Arguments to filter StudyPlans to count.
     * @example
     * // Count the number of StudyPlans
     * const count = await prisma.studyPlan.count({
     *   where: {
     *     // ... the filter for the StudyPlans we want to count
     *   }
     * })
    **/
    count<T extends StudyPlanCountArgs>(
      args?: Subset<T, StudyPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudyPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudyPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudyPlanAggregateArgs>(args: Subset<T, StudyPlanAggregateArgs>): Prisma.PrismaPromise<GetStudyPlanAggregateType<T>>

    /**
     * Group by StudyPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudyPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudyPlanGroupByArgs['orderBy'] }
        : { orderBy?: StudyPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudyPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudyPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudyPlan model
   */
  readonly fields: StudyPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudyPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudyPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    studyItems<T extends StudyPlan$studyItemsArgs<ExtArgs> = {}>(args?: Subset<T, StudyPlan$studyItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    planTags<T extends StudyPlan$planTagsArgs<ExtArgs> = {}>(args?: Subset<T, StudyPlan$planTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudyPlan model
   */
  interface StudyPlanFieldRefs {
    readonly id: FieldRef<"StudyPlan", 'Int'>
    readonly userId: FieldRef<"StudyPlan", 'Int'>
    readonly title: FieldRef<"StudyPlan", 'String'>
    readonly description: FieldRef<"StudyPlan", 'String'>
    readonly startDate: FieldRef<"StudyPlan", 'DateTime'>
    readonly endDate: FieldRef<"StudyPlan", 'DateTime'>
    readonly status: FieldRef<"StudyPlan", 'PlanStatus'>
    readonly createdAt: FieldRef<"StudyPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"StudyPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudyPlan findUnique
   */
  export type StudyPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * Filter, which StudyPlan to fetch.
     */
    where: StudyPlanWhereUniqueInput
  }

  /**
   * StudyPlan findUniqueOrThrow
   */
  export type StudyPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * Filter, which StudyPlan to fetch.
     */
    where: StudyPlanWhereUniqueInput
  }

  /**
   * StudyPlan findFirst
   */
  export type StudyPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * Filter, which StudyPlan to fetch.
     */
    where?: StudyPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyPlans to fetch.
     */
    orderBy?: StudyPlanOrderByWithRelationInput | StudyPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudyPlans.
     */
    cursor?: StudyPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyPlans.
     */
    distinct?: StudyPlanScalarFieldEnum | StudyPlanScalarFieldEnum[]
  }

  /**
   * StudyPlan findFirstOrThrow
   */
  export type StudyPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * Filter, which StudyPlan to fetch.
     */
    where?: StudyPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyPlans to fetch.
     */
    orderBy?: StudyPlanOrderByWithRelationInput | StudyPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudyPlans.
     */
    cursor?: StudyPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyPlans.
     */
    distinct?: StudyPlanScalarFieldEnum | StudyPlanScalarFieldEnum[]
  }

  /**
   * StudyPlan findMany
   */
  export type StudyPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * Filter, which StudyPlans to fetch.
     */
    where?: StudyPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyPlans to fetch.
     */
    orderBy?: StudyPlanOrderByWithRelationInput | StudyPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudyPlans.
     */
    cursor?: StudyPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyPlans.
     */
    skip?: number
    distinct?: StudyPlanScalarFieldEnum | StudyPlanScalarFieldEnum[]
  }

  /**
   * StudyPlan create
   */
  export type StudyPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a StudyPlan.
     */
    data: XOR<StudyPlanCreateInput, StudyPlanUncheckedCreateInput>
  }

  /**
   * StudyPlan createMany
   */
  export type StudyPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudyPlans.
     */
    data: StudyPlanCreateManyInput | StudyPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudyPlan createManyAndReturn
   */
  export type StudyPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * The data used to create many StudyPlans.
     */
    data: StudyPlanCreateManyInput | StudyPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudyPlan update
   */
  export type StudyPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a StudyPlan.
     */
    data: XOR<StudyPlanUpdateInput, StudyPlanUncheckedUpdateInput>
    /**
     * Choose, which StudyPlan to update.
     */
    where: StudyPlanWhereUniqueInput
  }

  /**
   * StudyPlan updateMany
   */
  export type StudyPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudyPlans.
     */
    data: XOR<StudyPlanUpdateManyMutationInput, StudyPlanUncheckedUpdateManyInput>
    /**
     * Filter which StudyPlans to update
     */
    where?: StudyPlanWhereInput
    /**
     * Limit how many StudyPlans to update.
     */
    limit?: number
  }

  /**
   * StudyPlan updateManyAndReturn
   */
  export type StudyPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * The data used to update StudyPlans.
     */
    data: XOR<StudyPlanUpdateManyMutationInput, StudyPlanUncheckedUpdateManyInput>
    /**
     * Filter which StudyPlans to update
     */
    where?: StudyPlanWhereInput
    /**
     * Limit how many StudyPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudyPlan upsert
   */
  export type StudyPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the StudyPlan to update in case it exists.
     */
    where: StudyPlanWhereUniqueInput
    /**
     * In case the StudyPlan found by the `where` argument doesn't exist, create a new StudyPlan with this data.
     */
    create: XOR<StudyPlanCreateInput, StudyPlanUncheckedCreateInput>
    /**
     * In case the StudyPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudyPlanUpdateInput, StudyPlanUncheckedUpdateInput>
  }

  /**
   * StudyPlan delete
   */
  export type StudyPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * Filter which StudyPlan to delete.
     */
    where: StudyPlanWhereUniqueInput
  }

  /**
   * StudyPlan deleteMany
   */
  export type StudyPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudyPlans to delete
     */
    where?: StudyPlanWhereInput
    /**
     * Limit how many StudyPlans to delete.
     */
    limit?: number
  }

  /**
   * StudyPlan.studyItems
   */
  export type StudyPlan$studyItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyItem
     */
    select?: StudyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyItem
     */
    omit?: StudyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyItemInclude<ExtArgs> | null
    where?: StudyItemWhereInput
    orderBy?: StudyItemOrderByWithRelationInput | StudyItemOrderByWithRelationInput[]
    cursor?: StudyItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudyItemScalarFieldEnum | StudyItemScalarFieldEnum[]
  }

  /**
   * StudyPlan.planTags
   */
  export type StudyPlan$planTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTag
     */
    select?: PlanTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTag
     */
    omit?: PlanTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanTagInclude<ExtArgs> | null
    where?: PlanTagWhereInput
    orderBy?: PlanTagOrderByWithRelationInput | PlanTagOrderByWithRelationInput[]
    cursor?: PlanTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanTagScalarFieldEnum | PlanTagScalarFieldEnum[]
  }

  /**
   * StudyPlan without action
   */
  export type StudyPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
  }


  /**
   * Model StudyItem
   */

  export type AggregateStudyItem = {
    _count: StudyItemCountAggregateOutputType | null
    _avg: StudyItemAvgAggregateOutputType | null
    _sum: StudyItemSumAggregateOutputType | null
    _min: StudyItemMinAggregateOutputType | null
    _max: StudyItemMaxAggregateOutputType | null
  }

  export type StudyItemAvgAggregateOutputType = {
    id: number | null
    planId: number | null
    estimatedHours: Decimal | null
    actualHours: Decimal | null
    completionPercentage: number | null
  }

  export type StudyItemSumAggregateOutputType = {
    id: number | null
    planId: number | null
    estimatedHours: Decimal | null
    actualHours: Decimal | null
    completionPercentage: number | null
  }

  export type StudyItemMinAggregateOutputType = {
    id: number | null
    planId: number | null
    title: string | null
    description: string | null
    estimatedHours: Decimal | null
    actualHours: Decimal | null
    status: $Enums.ItemStatus | null
    completionPercentage: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudyItemMaxAggregateOutputType = {
    id: number | null
    planId: number | null
    title: string | null
    description: string | null
    estimatedHours: Decimal | null
    actualHours: Decimal | null
    status: $Enums.ItemStatus | null
    completionPercentage: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudyItemCountAggregateOutputType = {
    id: number
    planId: number
    title: number
    description: number
    estimatedHours: number
    actualHours: number
    status: number
    completionPercentage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudyItemAvgAggregateInputType = {
    id?: true
    planId?: true
    estimatedHours?: true
    actualHours?: true
    completionPercentage?: true
  }

  export type StudyItemSumAggregateInputType = {
    id?: true
    planId?: true
    estimatedHours?: true
    actualHours?: true
    completionPercentage?: true
  }

  export type StudyItemMinAggregateInputType = {
    id?: true
    planId?: true
    title?: true
    description?: true
    estimatedHours?: true
    actualHours?: true
    status?: true
    completionPercentage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudyItemMaxAggregateInputType = {
    id?: true
    planId?: true
    title?: true
    description?: true
    estimatedHours?: true
    actualHours?: true
    status?: true
    completionPercentage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudyItemCountAggregateInputType = {
    id?: true
    planId?: true
    title?: true
    description?: true
    estimatedHours?: true
    actualHours?: true
    status?: true
    completionPercentage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudyItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudyItem to aggregate.
     */
    where?: StudyItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyItems to fetch.
     */
    orderBy?: StudyItemOrderByWithRelationInput | StudyItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudyItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudyItems
    **/
    _count?: true | StudyItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudyItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudyItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudyItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudyItemMaxAggregateInputType
  }

  export type GetStudyItemAggregateType<T extends StudyItemAggregateArgs> = {
        [P in keyof T & keyof AggregateStudyItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudyItem[P]>
      : GetScalarType<T[P], AggregateStudyItem[P]>
  }




  export type StudyItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyItemWhereInput
    orderBy?: StudyItemOrderByWithAggregationInput | StudyItemOrderByWithAggregationInput[]
    by: StudyItemScalarFieldEnum[] | StudyItemScalarFieldEnum
    having?: StudyItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudyItemCountAggregateInputType | true
    _avg?: StudyItemAvgAggregateInputType
    _sum?: StudyItemSumAggregateInputType
    _min?: StudyItemMinAggregateInputType
    _max?: StudyItemMaxAggregateInputType
  }

  export type StudyItemGroupByOutputType = {
    id: number
    planId: number
    title: string
    description: string | null
    estimatedHours: Decimal | null
    actualHours: Decimal | null
    status: $Enums.ItemStatus
    completionPercentage: number
    createdAt: Date
    updatedAt: Date
    _count: StudyItemCountAggregateOutputType | null
    _avg: StudyItemAvgAggregateOutputType | null
    _sum: StudyItemSumAggregateOutputType | null
    _min: StudyItemMinAggregateOutputType | null
    _max: StudyItemMaxAggregateOutputType | null
  }

  type GetStudyItemGroupByPayload<T extends StudyItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudyItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudyItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudyItemGroupByOutputType[P]>
            : GetScalarType<T[P], StudyItemGroupByOutputType[P]>
        }
      >
    >


  export type StudyItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    title?: boolean
    description?: boolean
    estimatedHours?: boolean
    actualHours?: boolean
    status?: boolean
    completionPercentage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studyPlan?: boolean | StudyPlanDefaultArgs<ExtArgs>
    studyLogs?: boolean | StudyItem$studyLogsArgs<ExtArgs>
    _count?: boolean | StudyItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyItem"]>

  export type StudyItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    title?: boolean
    description?: boolean
    estimatedHours?: boolean
    actualHours?: boolean
    status?: boolean
    completionPercentage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studyPlan?: boolean | StudyPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyItem"]>

  export type StudyItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    title?: boolean
    description?: boolean
    estimatedHours?: boolean
    actualHours?: boolean
    status?: boolean
    completionPercentage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studyPlan?: boolean | StudyPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyItem"]>

  export type StudyItemSelectScalar = {
    id?: boolean
    planId?: boolean
    title?: boolean
    description?: boolean
    estimatedHours?: boolean
    actualHours?: boolean
    status?: boolean
    completionPercentage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudyItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "planId" | "title" | "description" | "estimatedHours" | "actualHours" | "status" | "completionPercentage" | "createdAt" | "updatedAt", ExtArgs["result"]["studyItem"]>
  export type StudyItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studyPlan?: boolean | StudyPlanDefaultArgs<ExtArgs>
    studyLogs?: boolean | StudyItem$studyLogsArgs<ExtArgs>
    _count?: boolean | StudyItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudyItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studyPlan?: boolean | StudyPlanDefaultArgs<ExtArgs>
  }
  export type StudyItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studyPlan?: boolean | StudyPlanDefaultArgs<ExtArgs>
  }

  export type $StudyItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudyItem"
    objects: {
      studyPlan: Prisma.$StudyPlanPayload<ExtArgs>
      studyLogs: Prisma.$StudyLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      planId: number
      title: string
      description: string | null
      estimatedHours: Prisma.Decimal | null
      actualHours: Prisma.Decimal | null
      status: $Enums.ItemStatus
      completionPercentage: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studyItem"]>
    composites: {}
  }

  type StudyItemGetPayload<S extends boolean | null | undefined | StudyItemDefaultArgs> = $Result.GetResult<Prisma.$StudyItemPayload, S>

  type StudyItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudyItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudyItemCountAggregateInputType | true
    }

  export interface StudyItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudyItem'], meta: { name: 'StudyItem' } }
    /**
     * Find zero or one StudyItem that matches the filter.
     * @param {StudyItemFindUniqueArgs} args - Arguments to find a StudyItem
     * @example
     * // Get one StudyItem
     * const studyItem = await prisma.studyItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudyItemFindUniqueArgs>(args: SelectSubset<T, StudyItemFindUniqueArgs<ExtArgs>>): Prisma__StudyItemClient<$Result.GetResult<Prisma.$StudyItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudyItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudyItemFindUniqueOrThrowArgs} args - Arguments to find a StudyItem
     * @example
     * // Get one StudyItem
     * const studyItem = await prisma.studyItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudyItemFindUniqueOrThrowArgs>(args: SelectSubset<T, StudyItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudyItemClient<$Result.GetResult<Prisma.$StudyItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudyItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyItemFindFirstArgs} args - Arguments to find a StudyItem
     * @example
     * // Get one StudyItem
     * const studyItem = await prisma.studyItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudyItemFindFirstArgs>(args?: SelectSubset<T, StudyItemFindFirstArgs<ExtArgs>>): Prisma__StudyItemClient<$Result.GetResult<Prisma.$StudyItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudyItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyItemFindFirstOrThrowArgs} args - Arguments to find a StudyItem
     * @example
     * // Get one StudyItem
     * const studyItem = await prisma.studyItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudyItemFindFirstOrThrowArgs>(args?: SelectSubset<T, StudyItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudyItemClient<$Result.GetResult<Prisma.$StudyItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudyItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudyItems
     * const studyItems = await prisma.studyItem.findMany()
     * 
     * // Get first 10 StudyItems
     * const studyItems = await prisma.studyItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studyItemWithIdOnly = await prisma.studyItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudyItemFindManyArgs>(args?: SelectSubset<T, StudyItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudyItem.
     * @param {StudyItemCreateArgs} args - Arguments to create a StudyItem.
     * @example
     * // Create one StudyItem
     * const StudyItem = await prisma.studyItem.create({
     *   data: {
     *     // ... data to create a StudyItem
     *   }
     * })
     * 
     */
    create<T extends StudyItemCreateArgs>(args: SelectSubset<T, StudyItemCreateArgs<ExtArgs>>): Prisma__StudyItemClient<$Result.GetResult<Prisma.$StudyItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudyItems.
     * @param {StudyItemCreateManyArgs} args - Arguments to create many StudyItems.
     * @example
     * // Create many StudyItems
     * const studyItem = await prisma.studyItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudyItemCreateManyArgs>(args?: SelectSubset<T, StudyItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudyItems and returns the data saved in the database.
     * @param {StudyItemCreateManyAndReturnArgs} args - Arguments to create many StudyItems.
     * @example
     * // Create many StudyItems
     * const studyItem = await prisma.studyItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudyItems and only return the `id`
     * const studyItemWithIdOnly = await prisma.studyItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudyItemCreateManyAndReturnArgs>(args?: SelectSubset<T, StudyItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudyItem.
     * @param {StudyItemDeleteArgs} args - Arguments to delete one StudyItem.
     * @example
     * // Delete one StudyItem
     * const StudyItem = await prisma.studyItem.delete({
     *   where: {
     *     // ... filter to delete one StudyItem
     *   }
     * })
     * 
     */
    delete<T extends StudyItemDeleteArgs>(args: SelectSubset<T, StudyItemDeleteArgs<ExtArgs>>): Prisma__StudyItemClient<$Result.GetResult<Prisma.$StudyItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudyItem.
     * @param {StudyItemUpdateArgs} args - Arguments to update one StudyItem.
     * @example
     * // Update one StudyItem
     * const studyItem = await prisma.studyItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudyItemUpdateArgs>(args: SelectSubset<T, StudyItemUpdateArgs<ExtArgs>>): Prisma__StudyItemClient<$Result.GetResult<Prisma.$StudyItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudyItems.
     * @param {StudyItemDeleteManyArgs} args - Arguments to filter StudyItems to delete.
     * @example
     * // Delete a few StudyItems
     * const { count } = await prisma.studyItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudyItemDeleteManyArgs>(args?: SelectSubset<T, StudyItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudyItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudyItems
     * const studyItem = await prisma.studyItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudyItemUpdateManyArgs>(args: SelectSubset<T, StudyItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudyItems and returns the data updated in the database.
     * @param {StudyItemUpdateManyAndReturnArgs} args - Arguments to update many StudyItems.
     * @example
     * // Update many StudyItems
     * const studyItem = await prisma.studyItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudyItems and only return the `id`
     * const studyItemWithIdOnly = await prisma.studyItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudyItemUpdateManyAndReturnArgs>(args: SelectSubset<T, StudyItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudyItem.
     * @param {StudyItemUpsertArgs} args - Arguments to update or create a StudyItem.
     * @example
     * // Update or create a StudyItem
     * const studyItem = await prisma.studyItem.upsert({
     *   create: {
     *     // ... data to create a StudyItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudyItem we want to update
     *   }
     * })
     */
    upsert<T extends StudyItemUpsertArgs>(args: SelectSubset<T, StudyItemUpsertArgs<ExtArgs>>): Prisma__StudyItemClient<$Result.GetResult<Prisma.$StudyItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudyItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyItemCountArgs} args - Arguments to filter StudyItems to count.
     * @example
     * // Count the number of StudyItems
     * const count = await prisma.studyItem.count({
     *   where: {
     *     // ... the filter for the StudyItems we want to count
     *   }
     * })
    **/
    count<T extends StudyItemCountArgs>(
      args?: Subset<T, StudyItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudyItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudyItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudyItemAggregateArgs>(args: Subset<T, StudyItemAggregateArgs>): Prisma.PrismaPromise<GetStudyItemAggregateType<T>>

    /**
     * Group by StudyItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudyItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudyItemGroupByArgs['orderBy'] }
        : { orderBy?: StudyItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudyItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudyItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudyItem model
   */
  readonly fields: StudyItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudyItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudyItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studyPlan<T extends StudyPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudyPlanDefaultArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    studyLogs<T extends StudyItem$studyLogsArgs<ExtArgs> = {}>(args?: Subset<T, StudyItem$studyLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudyItem model
   */
  interface StudyItemFieldRefs {
    readonly id: FieldRef<"StudyItem", 'Int'>
    readonly planId: FieldRef<"StudyItem", 'Int'>
    readonly title: FieldRef<"StudyItem", 'String'>
    readonly description: FieldRef<"StudyItem", 'String'>
    readonly estimatedHours: FieldRef<"StudyItem", 'Decimal'>
    readonly actualHours: FieldRef<"StudyItem", 'Decimal'>
    readonly status: FieldRef<"StudyItem", 'ItemStatus'>
    readonly completionPercentage: FieldRef<"StudyItem", 'Int'>
    readonly createdAt: FieldRef<"StudyItem", 'DateTime'>
    readonly updatedAt: FieldRef<"StudyItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudyItem findUnique
   */
  export type StudyItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyItem
     */
    select?: StudyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyItem
     */
    omit?: StudyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyItemInclude<ExtArgs> | null
    /**
     * Filter, which StudyItem to fetch.
     */
    where: StudyItemWhereUniqueInput
  }

  /**
   * StudyItem findUniqueOrThrow
   */
  export type StudyItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyItem
     */
    select?: StudyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyItem
     */
    omit?: StudyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyItemInclude<ExtArgs> | null
    /**
     * Filter, which StudyItem to fetch.
     */
    where: StudyItemWhereUniqueInput
  }

  /**
   * StudyItem findFirst
   */
  export type StudyItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyItem
     */
    select?: StudyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyItem
     */
    omit?: StudyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyItemInclude<ExtArgs> | null
    /**
     * Filter, which StudyItem to fetch.
     */
    where?: StudyItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyItems to fetch.
     */
    orderBy?: StudyItemOrderByWithRelationInput | StudyItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudyItems.
     */
    cursor?: StudyItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyItems.
     */
    distinct?: StudyItemScalarFieldEnum | StudyItemScalarFieldEnum[]
  }

  /**
   * StudyItem findFirstOrThrow
   */
  export type StudyItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyItem
     */
    select?: StudyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyItem
     */
    omit?: StudyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyItemInclude<ExtArgs> | null
    /**
     * Filter, which StudyItem to fetch.
     */
    where?: StudyItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyItems to fetch.
     */
    orderBy?: StudyItemOrderByWithRelationInput | StudyItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudyItems.
     */
    cursor?: StudyItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyItems.
     */
    distinct?: StudyItemScalarFieldEnum | StudyItemScalarFieldEnum[]
  }

  /**
   * StudyItem findMany
   */
  export type StudyItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyItem
     */
    select?: StudyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyItem
     */
    omit?: StudyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyItemInclude<ExtArgs> | null
    /**
     * Filter, which StudyItems to fetch.
     */
    where?: StudyItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyItems to fetch.
     */
    orderBy?: StudyItemOrderByWithRelationInput | StudyItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudyItems.
     */
    cursor?: StudyItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyItems.
     */
    skip?: number
    distinct?: StudyItemScalarFieldEnum | StudyItemScalarFieldEnum[]
  }

  /**
   * StudyItem create
   */
  export type StudyItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyItem
     */
    select?: StudyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyItem
     */
    omit?: StudyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyItemInclude<ExtArgs> | null
    /**
     * The data needed to create a StudyItem.
     */
    data: XOR<StudyItemCreateInput, StudyItemUncheckedCreateInput>
  }

  /**
   * StudyItem createMany
   */
  export type StudyItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudyItems.
     */
    data: StudyItemCreateManyInput | StudyItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudyItem createManyAndReturn
   */
  export type StudyItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyItem
     */
    select?: StudyItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudyItem
     */
    omit?: StudyItemOmit<ExtArgs> | null
    /**
     * The data used to create many StudyItems.
     */
    data: StudyItemCreateManyInput | StudyItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudyItem update
   */
  export type StudyItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyItem
     */
    select?: StudyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyItem
     */
    omit?: StudyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyItemInclude<ExtArgs> | null
    /**
     * The data needed to update a StudyItem.
     */
    data: XOR<StudyItemUpdateInput, StudyItemUncheckedUpdateInput>
    /**
     * Choose, which StudyItem to update.
     */
    where: StudyItemWhereUniqueInput
  }

  /**
   * StudyItem updateMany
   */
  export type StudyItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudyItems.
     */
    data: XOR<StudyItemUpdateManyMutationInput, StudyItemUncheckedUpdateManyInput>
    /**
     * Filter which StudyItems to update
     */
    where?: StudyItemWhereInput
    /**
     * Limit how many StudyItems to update.
     */
    limit?: number
  }

  /**
   * StudyItem updateManyAndReturn
   */
  export type StudyItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyItem
     */
    select?: StudyItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudyItem
     */
    omit?: StudyItemOmit<ExtArgs> | null
    /**
     * The data used to update StudyItems.
     */
    data: XOR<StudyItemUpdateManyMutationInput, StudyItemUncheckedUpdateManyInput>
    /**
     * Filter which StudyItems to update
     */
    where?: StudyItemWhereInput
    /**
     * Limit how many StudyItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudyItem upsert
   */
  export type StudyItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyItem
     */
    select?: StudyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyItem
     */
    omit?: StudyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyItemInclude<ExtArgs> | null
    /**
     * The filter to search for the StudyItem to update in case it exists.
     */
    where: StudyItemWhereUniqueInput
    /**
     * In case the StudyItem found by the `where` argument doesn't exist, create a new StudyItem with this data.
     */
    create: XOR<StudyItemCreateInput, StudyItemUncheckedCreateInput>
    /**
     * In case the StudyItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudyItemUpdateInput, StudyItemUncheckedUpdateInput>
  }

  /**
   * StudyItem delete
   */
  export type StudyItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyItem
     */
    select?: StudyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyItem
     */
    omit?: StudyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyItemInclude<ExtArgs> | null
    /**
     * Filter which StudyItem to delete.
     */
    where: StudyItemWhereUniqueInput
  }

  /**
   * StudyItem deleteMany
   */
  export type StudyItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudyItems to delete
     */
    where?: StudyItemWhereInput
    /**
     * Limit how many StudyItems to delete.
     */
    limit?: number
  }

  /**
   * StudyItem.studyLogs
   */
  export type StudyItem$studyLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyLog
     */
    select?: StudyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyLog
     */
    omit?: StudyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyLogInclude<ExtArgs> | null
    where?: StudyLogWhereInput
    orderBy?: StudyLogOrderByWithRelationInput | StudyLogOrderByWithRelationInput[]
    cursor?: StudyLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudyLogScalarFieldEnum | StudyLogScalarFieldEnum[]
  }

  /**
   * StudyItem without action
   */
  export type StudyItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyItem
     */
    select?: StudyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyItem
     */
    omit?: StudyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyItemInclude<ExtArgs> | null
  }


  /**
   * Model StudyLog
   */

  export type AggregateStudyLog = {
    _count: StudyLogCountAggregateOutputType | null
    _avg: StudyLogAvgAggregateOutputType | null
    _sum: StudyLogSumAggregateOutputType | null
    _min: StudyLogMinAggregateOutputType | null
    _max: StudyLogMaxAggregateOutputType | null
  }

  export type StudyLogAvgAggregateOutputType = {
    id: number | null
    itemId: number | null
    hoursSpent: Decimal | null
  }

  export type StudyLogSumAggregateOutputType = {
    id: number | null
    itemId: number | null
    hoursSpent: Decimal | null
  }

  export type StudyLogMinAggregateOutputType = {
    id: number | null
    itemId: number | null
    studyDate: Date | null
    hoursSpent: Decimal | null
    notes: string | null
    createdAt: Date | null
  }

  export type StudyLogMaxAggregateOutputType = {
    id: number | null
    itemId: number | null
    studyDate: Date | null
    hoursSpent: Decimal | null
    notes: string | null
    createdAt: Date | null
  }

  export type StudyLogCountAggregateOutputType = {
    id: number
    itemId: number
    studyDate: number
    hoursSpent: number
    notes: number
    createdAt: number
    _all: number
  }


  export type StudyLogAvgAggregateInputType = {
    id?: true
    itemId?: true
    hoursSpent?: true
  }

  export type StudyLogSumAggregateInputType = {
    id?: true
    itemId?: true
    hoursSpent?: true
  }

  export type StudyLogMinAggregateInputType = {
    id?: true
    itemId?: true
    studyDate?: true
    hoursSpent?: true
    notes?: true
    createdAt?: true
  }

  export type StudyLogMaxAggregateInputType = {
    id?: true
    itemId?: true
    studyDate?: true
    hoursSpent?: true
    notes?: true
    createdAt?: true
  }

  export type StudyLogCountAggregateInputType = {
    id?: true
    itemId?: true
    studyDate?: true
    hoursSpent?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type StudyLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudyLog to aggregate.
     */
    where?: StudyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyLogs to fetch.
     */
    orderBy?: StudyLogOrderByWithRelationInput | StudyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudyLogs
    **/
    _count?: true | StudyLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudyLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudyLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudyLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudyLogMaxAggregateInputType
  }

  export type GetStudyLogAggregateType<T extends StudyLogAggregateArgs> = {
        [P in keyof T & keyof AggregateStudyLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudyLog[P]>
      : GetScalarType<T[P], AggregateStudyLog[P]>
  }




  export type StudyLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyLogWhereInput
    orderBy?: StudyLogOrderByWithAggregationInput | StudyLogOrderByWithAggregationInput[]
    by: StudyLogScalarFieldEnum[] | StudyLogScalarFieldEnum
    having?: StudyLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudyLogCountAggregateInputType | true
    _avg?: StudyLogAvgAggregateInputType
    _sum?: StudyLogSumAggregateInputType
    _min?: StudyLogMinAggregateInputType
    _max?: StudyLogMaxAggregateInputType
  }

  export type StudyLogGroupByOutputType = {
    id: number
    itemId: number
    studyDate: Date
    hoursSpent: Decimal
    notes: string | null
    createdAt: Date
    _count: StudyLogCountAggregateOutputType | null
    _avg: StudyLogAvgAggregateOutputType | null
    _sum: StudyLogSumAggregateOutputType | null
    _min: StudyLogMinAggregateOutputType | null
    _max: StudyLogMaxAggregateOutputType | null
  }

  type GetStudyLogGroupByPayload<T extends StudyLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudyLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudyLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudyLogGroupByOutputType[P]>
            : GetScalarType<T[P], StudyLogGroupByOutputType[P]>
        }
      >
    >


  export type StudyLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    studyDate?: boolean
    hoursSpent?: boolean
    notes?: boolean
    createdAt?: boolean
    studyItem?: boolean | StudyItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyLog"]>

  export type StudyLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    studyDate?: boolean
    hoursSpent?: boolean
    notes?: boolean
    createdAt?: boolean
    studyItem?: boolean | StudyItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyLog"]>

  export type StudyLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    studyDate?: boolean
    hoursSpent?: boolean
    notes?: boolean
    createdAt?: boolean
    studyItem?: boolean | StudyItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyLog"]>

  export type StudyLogSelectScalar = {
    id?: boolean
    itemId?: boolean
    studyDate?: boolean
    hoursSpent?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type StudyLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "itemId" | "studyDate" | "hoursSpent" | "notes" | "createdAt", ExtArgs["result"]["studyLog"]>
  export type StudyLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studyItem?: boolean | StudyItemDefaultArgs<ExtArgs>
  }
  export type StudyLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studyItem?: boolean | StudyItemDefaultArgs<ExtArgs>
  }
  export type StudyLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studyItem?: boolean | StudyItemDefaultArgs<ExtArgs>
  }

  export type $StudyLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudyLog"
    objects: {
      studyItem: Prisma.$StudyItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      itemId: number
      studyDate: Date
      hoursSpent: Prisma.Decimal
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["studyLog"]>
    composites: {}
  }

  type StudyLogGetPayload<S extends boolean | null | undefined | StudyLogDefaultArgs> = $Result.GetResult<Prisma.$StudyLogPayload, S>

  type StudyLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudyLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudyLogCountAggregateInputType | true
    }

  export interface StudyLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudyLog'], meta: { name: 'StudyLog' } }
    /**
     * Find zero or one StudyLog that matches the filter.
     * @param {StudyLogFindUniqueArgs} args - Arguments to find a StudyLog
     * @example
     * // Get one StudyLog
     * const studyLog = await prisma.studyLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudyLogFindUniqueArgs>(args: SelectSubset<T, StudyLogFindUniqueArgs<ExtArgs>>): Prisma__StudyLogClient<$Result.GetResult<Prisma.$StudyLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudyLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudyLogFindUniqueOrThrowArgs} args - Arguments to find a StudyLog
     * @example
     * // Get one StudyLog
     * const studyLog = await prisma.studyLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudyLogFindUniqueOrThrowArgs>(args: SelectSubset<T, StudyLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudyLogClient<$Result.GetResult<Prisma.$StudyLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudyLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyLogFindFirstArgs} args - Arguments to find a StudyLog
     * @example
     * // Get one StudyLog
     * const studyLog = await prisma.studyLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudyLogFindFirstArgs>(args?: SelectSubset<T, StudyLogFindFirstArgs<ExtArgs>>): Prisma__StudyLogClient<$Result.GetResult<Prisma.$StudyLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudyLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyLogFindFirstOrThrowArgs} args - Arguments to find a StudyLog
     * @example
     * // Get one StudyLog
     * const studyLog = await prisma.studyLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudyLogFindFirstOrThrowArgs>(args?: SelectSubset<T, StudyLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudyLogClient<$Result.GetResult<Prisma.$StudyLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudyLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudyLogs
     * const studyLogs = await prisma.studyLog.findMany()
     * 
     * // Get first 10 StudyLogs
     * const studyLogs = await prisma.studyLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studyLogWithIdOnly = await prisma.studyLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudyLogFindManyArgs>(args?: SelectSubset<T, StudyLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudyLog.
     * @param {StudyLogCreateArgs} args - Arguments to create a StudyLog.
     * @example
     * // Create one StudyLog
     * const StudyLog = await prisma.studyLog.create({
     *   data: {
     *     // ... data to create a StudyLog
     *   }
     * })
     * 
     */
    create<T extends StudyLogCreateArgs>(args: SelectSubset<T, StudyLogCreateArgs<ExtArgs>>): Prisma__StudyLogClient<$Result.GetResult<Prisma.$StudyLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudyLogs.
     * @param {StudyLogCreateManyArgs} args - Arguments to create many StudyLogs.
     * @example
     * // Create many StudyLogs
     * const studyLog = await prisma.studyLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudyLogCreateManyArgs>(args?: SelectSubset<T, StudyLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudyLogs and returns the data saved in the database.
     * @param {StudyLogCreateManyAndReturnArgs} args - Arguments to create many StudyLogs.
     * @example
     * // Create many StudyLogs
     * const studyLog = await prisma.studyLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudyLogs and only return the `id`
     * const studyLogWithIdOnly = await prisma.studyLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudyLogCreateManyAndReturnArgs>(args?: SelectSubset<T, StudyLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudyLog.
     * @param {StudyLogDeleteArgs} args - Arguments to delete one StudyLog.
     * @example
     * // Delete one StudyLog
     * const StudyLog = await prisma.studyLog.delete({
     *   where: {
     *     // ... filter to delete one StudyLog
     *   }
     * })
     * 
     */
    delete<T extends StudyLogDeleteArgs>(args: SelectSubset<T, StudyLogDeleteArgs<ExtArgs>>): Prisma__StudyLogClient<$Result.GetResult<Prisma.$StudyLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudyLog.
     * @param {StudyLogUpdateArgs} args - Arguments to update one StudyLog.
     * @example
     * // Update one StudyLog
     * const studyLog = await prisma.studyLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudyLogUpdateArgs>(args: SelectSubset<T, StudyLogUpdateArgs<ExtArgs>>): Prisma__StudyLogClient<$Result.GetResult<Prisma.$StudyLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudyLogs.
     * @param {StudyLogDeleteManyArgs} args - Arguments to filter StudyLogs to delete.
     * @example
     * // Delete a few StudyLogs
     * const { count } = await prisma.studyLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudyLogDeleteManyArgs>(args?: SelectSubset<T, StudyLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudyLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudyLogs
     * const studyLog = await prisma.studyLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudyLogUpdateManyArgs>(args: SelectSubset<T, StudyLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudyLogs and returns the data updated in the database.
     * @param {StudyLogUpdateManyAndReturnArgs} args - Arguments to update many StudyLogs.
     * @example
     * // Update many StudyLogs
     * const studyLog = await prisma.studyLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudyLogs and only return the `id`
     * const studyLogWithIdOnly = await prisma.studyLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudyLogUpdateManyAndReturnArgs>(args: SelectSubset<T, StudyLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudyLog.
     * @param {StudyLogUpsertArgs} args - Arguments to update or create a StudyLog.
     * @example
     * // Update or create a StudyLog
     * const studyLog = await prisma.studyLog.upsert({
     *   create: {
     *     // ... data to create a StudyLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudyLog we want to update
     *   }
     * })
     */
    upsert<T extends StudyLogUpsertArgs>(args: SelectSubset<T, StudyLogUpsertArgs<ExtArgs>>): Prisma__StudyLogClient<$Result.GetResult<Prisma.$StudyLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudyLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyLogCountArgs} args - Arguments to filter StudyLogs to count.
     * @example
     * // Count the number of StudyLogs
     * const count = await prisma.studyLog.count({
     *   where: {
     *     // ... the filter for the StudyLogs we want to count
     *   }
     * })
    **/
    count<T extends StudyLogCountArgs>(
      args?: Subset<T, StudyLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudyLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudyLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudyLogAggregateArgs>(args: Subset<T, StudyLogAggregateArgs>): Prisma.PrismaPromise<GetStudyLogAggregateType<T>>

    /**
     * Group by StudyLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudyLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudyLogGroupByArgs['orderBy'] }
        : { orderBy?: StudyLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudyLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudyLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudyLog model
   */
  readonly fields: StudyLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudyLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudyLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studyItem<T extends StudyItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudyItemDefaultArgs<ExtArgs>>): Prisma__StudyItemClient<$Result.GetResult<Prisma.$StudyItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudyLog model
   */
  interface StudyLogFieldRefs {
    readonly id: FieldRef<"StudyLog", 'Int'>
    readonly itemId: FieldRef<"StudyLog", 'Int'>
    readonly studyDate: FieldRef<"StudyLog", 'DateTime'>
    readonly hoursSpent: FieldRef<"StudyLog", 'Decimal'>
    readonly notes: FieldRef<"StudyLog", 'String'>
    readonly createdAt: FieldRef<"StudyLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudyLog findUnique
   */
  export type StudyLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyLog
     */
    select?: StudyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyLog
     */
    omit?: StudyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyLogInclude<ExtArgs> | null
    /**
     * Filter, which StudyLog to fetch.
     */
    where: StudyLogWhereUniqueInput
  }

  /**
   * StudyLog findUniqueOrThrow
   */
  export type StudyLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyLog
     */
    select?: StudyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyLog
     */
    omit?: StudyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyLogInclude<ExtArgs> | null
    /**
     * Filter, which StudyLog to fetch.
     */
    where: StudyLogWhereUniqueInput
  }

  /**
   * StudyLog findFirst
   */
  export type StudyLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyLog
     */
    select?: StudyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyLog
     */
    omit?: StudyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyLogInclude<ExtArgs> | null
    /**
     * Filter, which StudyLog to fetch.
     */
    where?: StudyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyLogs to fetch.
     */
    orderBy?: StudyLogOrderByWithRelationInput | StudyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudyLogs.
     */
    cursor?: StudyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyLogs.
     */
    distinct?: StudyLogScalarFieldEnum | StudyLogScalarFieldEnum[]
  }

  /**
   * StudyLog findFirstOrThrow
   */
  export type StudyLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyLog
     */
    select?: StudyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyLog
     */
    omit?: StudyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyLogInclude<ExtArgs> | null
    /**
     * Filter, which StudyLog to fetch.
     */
    where?: StudyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyLogs to fetch.
     */
    orderBy?: StudyLogOrderByWithRelationInput | StudyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudyLogs.
     */
    cursor?: StudyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyLogs.
     */
    distinct?: StudyLogScalarFieldEnum | StudyLogScalarFieldEnum[]
  }

  /**
   * StudyLog findMany
   */
  export type StudyLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyLog
     */
    select?: StudyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyLog
     */
    omit?: StudyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyLogInclude<ExtArgs> | null
    /**
     * Filter, which StudyLogs to fetch.
     */
    where?: StudyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyLogs to fetch.
     */
    orderBy?: StudyLogOrderByWithRelationInput | StudyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudyLogs.
     */
    cursor?: StudyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyLogs.
     */
    skip?: number
    distinct?: StudyLogScalarFieldEnum | StudyLogScalarFieldEnum[]
  }

  /**
   * StudyLog create
   */
  export type StudyLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyLog
     */
    select?: StudyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyLog
     */
    omit?: StudyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyLogInclude<ExtArgs> | null
    /**
     * The data needed to create a StudyLog.
     */
    data: XOR<StudyLogCreateInput, StudyLogUncheckedCreateInput>
  }

  /**
   * StudyLog createMany
   */
  export type StudyLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudyLogs.
     */
    data: StudyLogCreateManyInput | StudyLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudyLog createManyAndReturn
   */
  export type StudyLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyLog
     */
    select?: StudyLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudyLog
     */
    omit?: StudyLogOmit<ExtArgs> | null
    /**
     * The data used to create many StudyLogs.
     */
    data: StudyLogCreateManyInput | StudyLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudyLog update
   */
  export type StudyLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyLog
     */
    select?: StudyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyLog
     */
    omit?: StudyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyLogInclude<ExtArgs> | null
    /**
     * The data needed to update a StudyLog.
     */
    data: XOR<StudyLogUpdateInput, StudyLogUncheckedUpdateInput>
    /**
     * Choose, which StudyLog to update.
     */
    where: StudyLogWhereUniqueInput
  }

  /**
   * StudyLog updateMany
   */
  export type StudyLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudyLogs.
     */
    data: XOR<StudyLogUpdateManyMutationInput, StudyLogUncheckedUpdateManyInput>
    /**
     * Filter which StudyLogs to update
     */
    where?: StudyLogWhereInput
    /**
     * Limit how many StudyLogs to update.
     */
    limit?: number
  }

  /**
   * StudyLog updateManyAndReturn
   */
  export type StudyLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyLog
     */
    select?: StudyLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudyLog
     */
    omit?: StudyLogOmit<ExtArgs> | null
    /**
     * The data used to update StudyLogs.
     */
    data: XOR<StudyLogUpdateManyMutationInput, StudyLogUncheckedUpdateManyInput>
    /**
     * Filter which StudyLogs to update
     */
    where?: StudyLogWhereInput
    /**
     * Limit how many StudyLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudyLog upsert
   */
  export type StudyLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyLog
     */
    select?: StudyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyLog
     */
    omit?: StudyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyLogInclude<ExtArgs> | null
    /**
     * The filter to search for the StudyLog to update in case it exists.
     */
    where: StudyLogWhereUniqueInput
    /**
     * In case the StudyLog found by the `where` argument doesn't exist, create a new StudyLog with this data.
     */
    create: XOR<StudyLogCreateInput, StudyLogUncheckedCreateInput>
    /**
     * In case the StudyLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudyLogUpdateInput, StudyLogUncheckedUpdateInput>
  }

  /**
   * StudyLog delete
   */
  export type StudyLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyLog
     */
    select?: StudyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyLog
     */
    omit?: StudyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyLogInclude<ExtArgs> | null
    /**
     * Filter which StudyLog to delete.
     */
    where: StudyLogWhereUniqueInput
  }

  /**
   * StudyLog deleteMany
   */
  export type StudyLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudyLogs to delete
     */
    where?: StudyLogWhereInput
    /**
     * Limit how many StudyLogs to delete.
     */
    limit?: number
  }

  /**
   * StudyLog without action
   */
  export type StudyLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyLog
     */
    select?: StudyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyLog
     */
    omit?: StudyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyLogInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    color: string | null
    createdAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    color: string | null
    createdAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    color: number
    createdAt: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    color?: true
    createdAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    color?: true
    createdAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    color?: true
    createdAt?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: number
    userId: number
    name: string
    color: string
    createdAt: Date
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    color?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    taskTags?: boolean | Tag$taskTagsArgs<ExtArgs>
    planTags?: boolean | Tag$planTagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    color?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    color?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    color?: boolean
    createdAt?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "color" | "createdAt", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    taskTags?: boolean | Tag$taskTagsArgs<ExtArgs>
    planTags?: boolean | Tag$planTagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      taskTags: Prisma.$TaskTagPayload<ExtArgs>[]
      planTags: Prisma.$PlanTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      name: string
      color: string
      createdAt: Date
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    taskTags<T extends Tag$taskTagsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$taskTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    planTags<T extends Tag$planTagsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$planTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'Int'>
    readonly userId: FieldRef<"Tag", 'Int'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly color: FieldRef<"Tag", 'String'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.taskTags
   */
  export type Tag$taskTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    where?: TaskTagWhereInput
    orderBy?: TaskTagOrderByWithRelationInput | TaskTagOrderByWithRelationInput[]
    cursor?: TaskTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskTagScalarFieldEnum | TaskTagScalarFieldEnum[]
  }

  /**
   * Tag.planTags
   */
  export type Tag$planTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTag
     */
    select?: PlanTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTag
     */
    omit?: PlanTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanTagInclude<ExtArgs> | null
    where?: PlanTagWhereInput
    orderBy?: PlanTagOrderByWithRelationInput | PlanTagOrderByWithRelationInput[]
    cursor?: PlanTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanTagScalarFieldEnum | PlanTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model TaskTag
   */

  export type AggregateTaskTag = {
    _count: TaskTagCountAggregateOutputType | null
    _avg: TaskTagAvgAggregateOutputType | null
    _sum: TaskTagSumAggregateOutputType | null
    _min: TaskTagMinAggregateOutputType | null
    _max: TaskTagMaxAggregateOutputType | null
  }

  export type TaskTagAvgAggregateOutputType = {
    taskId: number | null
    tagId: number | null
  }

  export type TaskTagSumAggregateOutputType = {
    taskId: number | null
    tagId: number | null
  }

  export type TaskTagMinAggregateOutputType = {
    taskId: number | null
    tagId: number | null
  }

  export type TaskTagMaxAggregateOutputType = {
    taskId: number | null
    tagId: number | null
  }

  export type TaskTagCountAggregateOutputType = {
    taskId: number
    tagId: number
    _all: number
  }


  export type TaskTagAvgAggregateInputType = {
    taskId?: true
    tagId?: true
  }

  export type TaskTagSumAggregateInputType = {
    taskId?: true
    tagId?: true
  }

  export type TaskTagMinAggregateInputType = {
    taskId?: true
    tagId?: true
  }

  export type TaskTagMaxAggregateInputType = {
    taskId?: true
    tagId?: true
  }

  export type TaskTagCountAggregateInputType = {
    taskId?: true
    tagId?: true
    _all?: true
  }

  export type TaskTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskTag to aggregate.
     */
    where?: TaskTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskTags to fetch.
     */
    orderBy?: TaskTagOrderByWithRelationInput | TaskTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskTags
    **/
    _count?: true | TaskTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskTagMaxAggregateInputType
  }

  export type GetTaskTagAggregateType<T extends TaskTagAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskTag[P]>
      : GetScalarType<T[P], AggregateTaskTag[P]>
  }




  export type TaskTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskTagWhereInput
    orderBy?: TaskTagOrderByWithAggregationInput | TaskTagOrderByWithAggregationInput[]
    by: TaskTagScalarFieldEnum[] | TaskTagScalarFieldEnum
    having?: TaskTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskTagCountAggregateInputType | true
    _avg?: TaskTagAvgAggregateInputType
    _sum?: TaskTagSumAggregateInputType
    _min?: TaskTagMinAggregateInputType
    _max?: TaskTagMaxAggregateInputType
  }

  export type TaskTagGroupByOutputType = {
    taskId: number
    tagId: number
    _count: TaskTagCountAggregateOutputType | null
    _avg: TaskTagAvgAggregateOutputType | null
    _sum: TaskTagSumAggregateOutputType | null
    _min: TaskTagMinAggregateOutputType | null
    _max: TaskTagMaxAggregateOutputType | null
  }

  type GetTaskTagGroupByPayload<T extends TaskTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskTagGroupByOutputType[P]>
            : GetScalarType<T[P], TaskTagGroupByOutputType[P]>
        }
      >
    >


  export type TaskTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    taskId?: boolean
    tagId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskTag"]>

  export type TaskTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    taskId?: boolean
    tagId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskTag"]>

  export type TaskTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    taskId?: boolean
    tagId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskTag"]>

  export type TaskTagSelectScalar = {
    taskId?: boolean
    tagId?: boolean
  }

  export type TaskTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"taskId" | "tagId", ExtArgs["result"]["taskTag"]>
  export type TaskTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type TaskTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type TaskTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $TaskTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskTag"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      taskId: number
      tagId: number
    }, ExtArgs["result"]["taskTag"]>
    composites: {}
  }

  type TaskTagGetPayload<S extends boolean | null | undefined | TaskTagDefaultArgs> = $Result.GetResult<Prisma.$TaskTagPayload, S>

  type TaskTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskTagCountAggregateInputType | true
    }

  export interface TaskTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskTag'], meta: { name: 'TaskTag' } }
    /**
     * Find zero or one TaskTag that matches the filter.
     * @param {TaskTagFindUniqueArgs} args - Arguments to find a TaskTag
     * @example
     * // Get one TaskTag
     * const taskTag = await prisma.taskTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskTagFindUniqueArgs>(args: SelectSubset<T, TaskTagFindUniqueArgs<ExtArgs>>): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskTagFindUniqueOrThrowArgs} args - Arguments to find a TaskTag
     * @example
     * // Get one TaskTag
     * const taskTag = await prisma.taskTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskTagFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTagFindFirstArgs} args - Arguments to find a TaskTag
     * @example
     * // Get one TaskTag
     * const taskTag = await prisma.taskTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskTagFindFirstArgs>(args?: SelectSubset<T, TaskTagFindFirstArgs<ExtArgs>>): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTagFindFirstOrThrowArgs} args - Arguments to find a TaskTag
     * @example
     * // Get one TaskTag
     * const taskTag = await prisma.taskTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskTagFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskTags
     * const taskTags = await prisma.taskTag.findMany()
     * 
     * // Get first 10 TaskTags
     * const taskTags = await prisma.taskTag.findMany({ take: 10 })
     * 
     * // Only select the `taskId`
     * const taskTagWithTaskIdOnly = await prisma.taskTag.findMany({ select: { taskId: true } })
     * 
     */
    findMany<T extends TaskTagFindManyArgs>(args?: SelectSubset<T, TaskTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskTag.
     * @param {TaskTagCreateArgs} args - Arguments to create a TaskTag.
     * @example
     * // Create one TaskTag
     * const TaskTag = await prisma.taskTag.create({
     *   data: {
     *     // ... data to create a TaskTag
     *   }
     * })
     * 
     */
    create<T extends TaskTagCreateArgs>(args: SelectSubset<T, TaskTagCreateArgs<ExtArgs>>): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskTags.
     * @param {TaskTagCreateManyArgs} args - Arguments to create many TaskTags.
     * @example
     * // Create many TaskTags
     * const taskTag = await prisma.taskTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskTagCreateManyArgs>(args?: SelectSubset<T, TaskTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskTags and returns the data saved in the database.
     * @param {TaskTagCreateManyAndReturnArgs} args - Arguments to create many TaskTags.
     * @example
     * // Create many TaskTags
     * const taskTag = await prisma.taskTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskTags and only return the `taskId`
     * const taskTagWithTaskIdOnly = await prisma.taskTag.createManyAndReturn({
     *   select: { taskId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskTagCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskTag.
     * @param {TaskTagDeleteArgs} args - Arguments to delete one TaskTag.
     * @example
     * // Delete one TaskTag
     * const TaskTag = await prisma.taskTag.delete({
     *   where: {
     *     // ... filter to delete one TaskTag
     *   }
     * })
     * 
     */
    delete<T extends TaskTagDeleteArgs>(args: SelectSubset<T, TaskTagDeleteArgs<ExtArgs>>): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskTag.
     * @param {TaskTagUpdateArgs} args - Arguments to update one TaskTag.
     * @example
     * // Update one TaskTag
     * const taskTag = await prisma.taskTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskTagUpdateArgs>(args: SelectSubset<T, TaskTagUpdateArgs<ExtArgs>>): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskTags.
     * @param {TaskTagDeleteManyArgs} args - Arguments to filter TaskTags to delete.
     * @example
     * // Delete a few TaskTags
     * const { count } = await prisma.taskTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskTagDeleteManyArgs>(args?: SelectSubset<T, TaskTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskTags
     * const taskTag = await prisma.taskTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskTagUpdateManyArgs>(args: SelectSubset<T, TaskTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskTags and returns the data updated in the database.
     * @param {TaskTagUpdateManyAndReturnArgs} args - Arguments to update many TaskTags.
     * @example
     * // Update many TaskTags
     * const taskTag = await prisma.taskTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskTags and only return the `taskId`
     * const taskTagWithTaskIdOnly = await prisma.taskTag.updateManyAndReturn({
     *   select: { taskId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskTagUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskTag.
     * @param {TaskTagUpsertArgs} args - Arguments to update or create a TaskTag.
     * @example
     * // Update or create a TaskTag
     * const taskTag = await prisma.taskTag.upsert({
     *   create: {
     *     // ... data to create a TaskTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskTag we want to update
     *   }
     * })
     */
    upsert<T extends TaskTagUpsertArgs>(args: SelectSubset<T, TaskTagUpsertArgs<ExtArgs>>): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTagCountArgs} args - Arguments to filter TaskTags to count.
     * @example
     * // Count the number of TaskTags
     * const count = await prisma.taskTag.count({
     *   where: {
     *     // ... the filter for the TaskTags we want to count
     *   }
     * })
    **/
    count<T extends TaskTagCountArgs>(
      args?: Subset<T, TaskTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskTagAggregateArgs>(args: Subset<T, TaskTagAggregateArgs>): Prisma.PrismaPromise<GetTaskTagAggregateType<T>>

    /**
     * Group by TaskTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskTagGroupByArgs['orderBy'] }
        : { orderBy?: TaskTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskTag model
   */
  readonly fields: TaskTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskTag model
   */
  interface TaskTagFieldRefs {
    readonly taskId: FieldRef<"TaskTag", 'Int'>
    readonly tagId: FieldRef<"TaskTag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TaskTag findUnique
   */
  export type TaskTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * Filter, which TaskTag to fetch.
     */
    where: TaskTagWhereUniqueInput
  }

  /**
   * TaskTag findUniqueOrThrow
   */
  export type TaskTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * Filter, which TaskTag to fetch.
     */
    where: TaskTagWhereUniqueInput
  }

  /**
   * TaskTag findFirst
   */
  export type TaskTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * Filter, which TaskTag to fetch.
     */
    where?: TaskTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskTags to fetch.
     */
    orderBy?: TaskTagOrderByWithRelationInput | TaskTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskTags.
     */
    cursor?: TaskTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskTags.
     */
    distinct?: TaskTagScalarFieldEnum | TaskTagScalarFieldEnum[]
  }

  /**
   * TaskTag findFirstOrThrow
   */
  export type TaskTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * Filter, which TaskTag to fetch.
     */
    where?: TaskTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskTags to fetch.
     */
    orderBy?: TaskTagOrderByWithRelationInput | TaskTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskTags.
     */
    cursor?: TaskTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskTags.
     */
    distinct?: TaskTagScalarFieldEnum | TaskTagScalarFieldEnum[]
  }

  /**
   * TaskTag findMany
   */
  export type TaskTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * Filter, which TaskTags to fetch.
     */
    where?: TaskTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskTags to fetch.
     */
    orderBy?: TaskTagOrderByWithRelationInput | TaskTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskTags.
     */
    cursor?: TaskTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskTags.
     */
    skip?: number
    distinct?: TaskTagScalarFieldEnum | TaskTagScalarFieldEnum[]
  }

  /**
   * TaskTag create
   */
  export type TaskTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskTag.
     */
    data: XOR<TaskTagCreateInput, TaskTagUncheckedCreateInput>
  }

  /**
   * TaskTag createMany
   */
  export type TaskTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskTags.
     */
    data: TaskTagCreateManyInput | TaskTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskTag createManyAndReturn
   */
  export type TaskTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * The data used to create many TaskTags.
     */
    data: TaskTagCreateManyInput | TaskTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskTag update
   */
  export type TaskTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskTag.
     */
    data: XOR<TaskTagUpdateInput, TaskTagUncheckedUpdateInput>
    /**
     * Choose, which TaskTag to update.
     */
    where: TaskTagWhereUniqueInput
  }

  /**
   * TaskTag updateMany
   */
  export type TaskTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskTags.
     */
    data: XOR<TaskTagUpdateManyMutationInput, TaskTagUncheckedUpdateManyInput>
    /**
     * Filter which TaskTags to update
     */
    where?: TaskTagWhereInput
    /**
     * Limit how many TaskTags to update.
     */
    limit?: number
  }

  /**
   * TaskTag updateManyAndReturn
   */
  export type TaskTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * The data used to update TaskTags.
     */
    data: XOR<TaskTagUpdateManyMutationInput, TaskTagUncheckedUpdateManyInput>
    /**
     * Filter which TaskTags to update
     */
    where?: TaskTagWhereInput
    /**
     * Limit how many TaskTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskTag upsert
   */
  export type TaskTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskTag to update in case it exists.
     */
    where: TaskTagWhereUniqueInput
    /**
     * In case the TaskTag found by the `where` argument doesn't exist, create a new TaskTag with this data.
     */
    create: XOR<TaskTagCreateInput, TaskTagUncheckedCreateInput>
    /**
     * In case the TaskTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskTagUpdateInput, TaskTagUncheckedUpdateInput>
  }

  /**
   * TaskTag delete
   */
  export type TaskTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * Filter which TaskTag to delete.
     */
    where: TaskTagWhereUniqueInput
  }

  /**
   * TaskTag deleteMany
   */
  export type TaskTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskTags to delete
     */
    where?: TaskTagWhereInput
    /**
     * Limit how many TaskTags to delete.
     */
    limit?: number
  }

  /**
   * TaskTag without action
   */
  export type TaskTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
  }


  /**
   * Model PlanTag
   */

  export type AggregatePlanTag = {
    _count: PlanTagCountAggregateOutputType | null
    _avg: PlanTagAvgAggregateOutputType | null
    _sum: PlanTagSumAggregateOutputType | null
    _min: PlanTagMinAggregateOutputType | null
    _max: PlanTagMaxAggregateOutputType | null
  }

  export type PlanTagAvgAggregateOutputType = {
    planId: number | null
    tagId: number | null
  }

  export type PlanTagSumAggregateOutputType = {
    planId: number | null
    tagId: number | null
  }

  export type PlanTagMinAggregateOutputType = {
    planId: number | null
    tagId: number | null
  }

  export type PlanTagMaxAggregateOutputType = {
    planId: number | null
    tagId: number | null
  }

  export type PlanTagCountAggregateOutputType = {
    planId: number
    tagId: number
    _all: number
  }


  export type PlanTagAvgAggregateInputType = {
    planId?: true
    tagId?: true
  }

  export type PlanTagSumAggregateInputType = {
    planId?: true
    tagId?: true
  }

  export type PlanTagMinAggregateInputType = {
    planId?: true
    tagId?: true
  }

  export type PlanTagMaxAggregateInputType = {
    planId?: true
    tagId?: true
  }

  export type PlanTagCountAggregateInputType = {
    planId?: true
    tagId?: true
    _all?: true
  }

  export type PlanTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanTag to aggregate.
     */
    where?: PlanTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanTags to fetch.
     */
    orderBy?: PlanTagOrderByWithRelationInput | PlanTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlanTags
    **/
    _count?: true | PlanTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanTagMaxAggregateInputType
  }

  export type GetPlanTagAggregateType<T extends PlanTagAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanTag[P]>
      : GetScalarType<T[P], AggregatePlanTag[P]>
  }




  export type PlanTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanTagWhereInput
    orderBy?: PlanTagOrderByWithAggregationInput | PlanTagOrderByWithAggregationInput[]
    by: PlanTagScalarFieldEnum[] | PlanTagScalarFieldEnum
    having?: PlanTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanTagCountAggregateInputType | true
    _avg?: PlanTagAvgAggregateInputType
    _sum?: PlanTagSumAggregateInputType
    _min?: PlanTagMinAggregateInputType
    _max?: PlanTagMaxAggregateInputType
  }

  export type PlanTagGroupByOutputType = {
    planId: number
    tagId: number
    _count: PlanTagCountAggregateOutputType | null
    _avg: PlanTagAvgAggregateOutputType | null
    _sum: PlanTagSumAggregateOutputType | null
    _min: PlanTagMinAggregateOutputType | null
    _max: PlanTagMaxAggregateOutputType | null
  }

  type GetPlanTagGroupByPayload<T extends PlanTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanTagGroupByOutputType[P]>
            : GetScalarType<T[P], PlanTagGroupByOutputType[P]>
        }
      >
    >


  export type PlanTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    planId?: boolean
    tagId?: boolean
    studyPlan?: boolean | StudyPlanDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planTag"]>

  export type PlanTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    planId?: boolean
    tagId?: boolean
    studyPlan?: boolean | StudyPlanDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planTag"]>

  export type PlanTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    planId?: boolean
    tagId?: boolean
    studyPlan?: boolean | StudyPlanDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planTag"]>

  export type PlanTagSelectScalar = {
    planId?: boolean
    tagId?: boolean
  }

  export type PlanTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"planId" | "tagId", ExtArgs["result"]["planTag"]>
  export type PlanTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studyPlan?: boolean | StudyPlanDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type PlanTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studyPlan?: boolean | StudyPlanDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type PlanTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studyPlan?: boolean | StudyPlanDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $PlanTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlanTag"
    objects: {
      studyPlan: Prisma.$StudyPlanPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      planId: number
      tagId: number
    }, ExtArgs["result"]["planTag"]>
    composites: {}
  }

  type PlanTagGetPayload<S extends boolean | null | undefined | PlanTagDefaultArgs> = $Result.GetResult<Prisma.$PlanTagPayload, S>

  type PlanTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanTagCountAggregateInputType | true
    }

  export interface PlanTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlanTag'], meta: { name: 'PlanTag' } }
    /**
     * Find zero or one PlanTag that matches the filter.
     * @param {PlanTagFindUniqueArgs} args - Arguments to find a PlanTag
     * @example
     * // Get one PlanTag
     * const planTag = await prisma.planTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanTagFindUniqueArgs>(args: SelectSubset<T, PlanTagFindUniqueArgs<ExtArgs>>): Prisma__PlanTagClient<$Result.GetResult<Prisma.$PlanTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlanTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanTagFindUniqueOrThrowArgs} args - Arguments to find a PlanTag
     * @example
     * // Get one PlanTag
     * const planTag = await prisma.planTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanTagFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanTagClient<$Result.GetResult<Prisma.$PlanTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanTagFindFirstArgs} args - Arguments to find a PlanTag
     * @example
     * // Get one PlanTag
     * const planTag = await prisma.planTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanTagFindFirstArgs>(args?: SelectSubset<T, PlanTagFindFirstArgs<ExtArgs>>): Prisma__PlanTagClient<$Result.GetResult<Prisma.$PlanTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanTagFindFirstOrThrowArgs} args - Arguments to find a PlanTag
     * @example
     * // Get one PlanTag
     * const planTag = await prisma.planTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanTagFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanTagClient<$Result.GetResult<Prisma.$PlanTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlanTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlanTags
     * const planTags = await prisma.planTag.findMany()
     * 
     * // Get first 10 PlanTags
     * const planTags = await prisma.planTag.findMany({ take: 10 })
     * 
     * // Only select the `planId`
     * const planTagWithPlanIdOnly = await prisma.planTag.findMany({ select: { planId: true } })
     * 
     */
    findMany<T extends PlanTagFindManyArgs>(args?: SelectSubset<T, PlanTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlanTag.
     * @param {PlanTagCreateArgs} args - Arguments to create a PlanTag.
     * @example
     * // Create one PlanTag
     * const PlanTag = await prisma.planTag.create({
     *   data: {
     *     // ... data to create a PlanTag
     *   }
     * })
     * 
     */
    create<T extends PlanTagCreateArgs>(args: SelectSubset<T, PlanTagCreateArgs<ExtArgs>>): Prisma__PlanTagClient<$Result.GetResult<Prisma.$PlanTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlanTags.
     * @param {PlanTagCreateManyArgs} args - Arguments to create many PlanTags.
     * @example
     * // Create many PlanTags
     * const planTag = await prisma.planTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanTagCreateManyArgs>(args?: SelectSubset<T, PlanTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlanTags and returns the data saved in the database.
     * @param {PlanTagCreateManyAndReturnArgs} args - Arguments to create many PlanTags.
     * @example
     * // Create many PlanTags
     * const planTag = await prisma.planTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlanTags and only return the `planId`
     * const planTagWithPlanIdOnly = await prisma.planTag.createManyAndReturn({
     *   select: { planId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanTagCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlanTag.
     * @param {PlanTagDeleteArgs} args - Arguments to delete one PlanTag.
     * @example
     * // Delete one PlanTag
     * const PlanTag = await prisma.planTag.delete({
     *   where: {
     *     // ... filter to delete one PlanTag
     *   }
     * })
     * 
     */
    delete<T extends PlanTagDeleteArgs>(args: SelectSubset<T, PlanTagDeleteArgs<ExtArgs>>): Prisma__PlanTagClient<$Result.GetResult<Prisma.$PlanTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlanTag.
     * @param {PlanTagUpdateArgs} args - Arguments to update one PlanTag.
     * @example
     * // Update one PlanTag
     * const planTag = await prisma.planTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanTagUpdateArgs>(args: SelectSubset<T, PlanTagUpdateArgs<ExtArgs>>): Prisma__PlanTagClient<$Result.GetResult<Prisma.$PlanTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlanTags.
     * @param {PlanTagDeleteManyArgs} args - Arguments to filter PlanTags to delete.
     * @example
     * // Delete a few PlanTags
     * const { count } = await prisma.planTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanTagDeleteManyArgs>(args?: SelectSubset<T, PlanTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlanTags
     * const planTag = await prisma.planTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanTagUpdateManyArgs>(args: SelectSubset<T, PlanTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanTags and returns the data updated in the database.
     * @param {PlanTagUpdateManyAndReturnArgs} args - Arguments to update many PlanTags.
     * @example
     * // Update many PlanTags
     * const planTag = await prisma.planTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlanTags and only return the `planId`
     * const planTagWithPlanIdOnly = await prisma.planTag.updateManyAndReturn({
     *   select: { planId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlanTagUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlanTag.
     * @param {PlanTagUpsertArgs} args - Arguments to update or create a PlanTag.
     * @example
     * // Update or create a PlanTag
     * const planTag = await prisma.planTag.upsert({
     *   create: {
     *     // ... data to create a PlanTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlanTag we want to update
     *   }
     * })
     */
    upsert<T extends PlanTagUpsertArgs>(args: SelectSubset<T, PlanTagUpsertArgs<ExtArgs>>): Prisma__PlanTagClient<$Result.GetResult<Prisma.$PlanTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlanTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanTagCountArgs} args - Arguments to filter PlanTags to count.
     * @example
     * // Count the number of PlanTags
     * const count = await prisma.planTag.count({
     *   where: {
     *     // ... the filter for the PlanTags we want to count
     *   }
     * })
    **/
    count<T extends PlanTagCountArgs>(
      args?: Subset<T, PlanTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlanTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlanTagAggregateArgs>(args: Subset<T, PlanTagAggregateArgs>): Prisma.PrismaPromise<GetPlanTagAggregateType<T>>

    /**
     * Group by PlanTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlanTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanTagGroupByArgs['orderBy'] }
        : { orderBy?: PlanTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlanTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlanTag model
   */
  readonly fields: PlanTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlanTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studyPlan<T extends StudyPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudyPlanDefaultArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlanTag model
   */
  interface PlanTagFieldRefs {
    readonly planId: FieldRef<"PlanTag", 'Int'>
    readonly tagId: FieldRef<"PlanTag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PlanTag findUnique
   */
  export type PlanTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTag
     */
    select?: PlanTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTag
     */
    omit?: PlanTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanTagInclude<ExtArgs> | null
    /**
     * Filter, which PlanTag to fetch.
     */
    where: PlanTagWhereUniqueInput
  }

  /**
   * PlanTag findUniqueOrThrow
   */
  export type PlanTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTag
     */
    select?: PlanTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTag
     */
    omit?: PlanTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanTagInclude<ExtArgs> | null
    /**
     * Filter, which PlanTag to fetch.
     */
    where: PlanTagWhereUniqueInput
  }

  /**
   * PlanTag findFirst
   */
  export type PlanTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTag
     */
    select?: PlanTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTag
     */
    omit?: PlanTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanTagInclude<ExtArgs> | null
    /**
     * Filter, which PlanTag to fetch.
     */
    where?: PlanTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanTags to fetch.
     */
    orderBy?: PlanTagOrderByWithRelationInput | PlanTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanTags.
     */
    cursor?: PlanTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanTags.
     */
    distinct?: PlanTagScalarFieldEnum | PlanTagScalarFieldEnum[]
  }

  /**
   * PlanTag findFirstOrThrow
   */
  export type PlanTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTag
     */
    select?: PlanTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTag
     */
    omit?: PlanTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanTagInclude<ExtArgs> | null
    /**
     * Filter, which PlanTag to fetch.
     */
    where?: PlanTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanTags to fetch.
     */
    orderBy?: PlanTagOrderByWithRelationInput | PlanTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanTags.
     */
    cursor?: PlanTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanTags.
     */
    distinct?: PlanTagScalarFieldEnum | PlanTagScalarFieldEnum[]
  }

  /**
   * PlanTag findMany
   */
  export type PlanTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTag
     */
    select?: PlanTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTag
     */
    omit?: PlanTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanTagInclude<ExtArgs> | null
    /**
     * Filter, which PlanTags to fetch.
     */
    where?: PlanTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanTags to fetch.
     */
    orderBy?: PlanTagOrderByWithRelationInput | PlanTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlanTags.
     */
    cursor?: PlanTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanTags.
     */
    skip?: number
    distinct?: PlanTagScalarFieldEnum | PlanTagScalarFieldEnum[]
  }

  /**
   * PlanTag create
   */
  export type PlanTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTag
     */
    select?: PlanTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTag
     */
    omit?: PlanTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanTagInclude<ExtArgs> | null
    /**
     * The data needed to create a PlanTag.
     */
    data: XOR<PlanTagCreateInput, PlanTagUncheckedCreateInput>
  }

  /**
   * PlanTag createMany
   */
  export type PlanTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlanTags.
     */
    data: PlanTagCreateManyInput | PlanTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlanTag createManyAndReturn
   */
  export type PlanTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTag
     */
    select?: PlanTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTag
     */
    omit?: PlanTagOmit<ExtArgs> | null
    /**
     * The data used to create many PlanTags.
     */
    data: PlanTagCreateManyInput | PlanTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlanTag update
   */
  export type PlanTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTag
     */
    select?: PlanTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTag
     */
    omit?: PlanTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanTagInclude<ExtArgs> | null
    /**
     * The data needed to update a PlanTag.
     */
    data: XOR<PlanTagUpdateInput, PlanTagUncheckedUpdateInput>
    /**
     * Choose, which PlanTag to update.
     */
    where: PlanTagWhereUniqueInput
  }

  /**
   * PlanTag updateMany
   */
  export type PlanTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlanTags.
     */
    data: XOR<PlanTagUpdateManyMutationInput, PlanTagUncheckedUpdateManyInput>
    /**
     * Filter which PlanTags to update
     */
    where?: PlanTagWhereInput
    /**
     * Limit how many PlanTags to update.
     */
    limit?: number
  }

  /**
   * PlanTag updateManyAndReturn
   */
  export type PlanTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTag
     */
    select?: PlanTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTag
     */
    omit?: PlanTagOmit<ExtArgs> | null
    /**
     * The data used to update PlanTags.
     */
    data: XOR<PlanTagUpdateManyMutationInput, PlanTagUncheckedUpdateManyInput>
    /**
     * Filter which PlanTags to update
     */
    where?: PlanTagWhereInput
    /**
     * Limit how many PlanTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlanTag upsert
   */
  export type PlanTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTag
     */
    select?: PlanTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTag
     */
    omit?: PlanTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanTagInclude<ExtArgs> | null
    /**
     * The filter to search for the PlanTag to update in case it exists.
     */
    where: PlanTagWhereUniqueInput
    /**
     * In case the PlanTag found by the `where` argument doesn't exist, create a new PlanTag with this data.
     */
    create: XOR<PlanTagCreateInput, PlanTagUncheckedCreateInput>
    /**
     * In case the PlanTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanTagUpdateInput, PlanTagUncheckedUpdateInput>
  }

  /**
   * PlanTag delete
   */
  export type PlanTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTag
     */
    select?: PlanTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTag
     */
    omit?: PlanTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanTagInclude<ExtArgs> | null
    /**
     * Filter which PlanTag to delete.
     */
    where: PlanTagWhereUniqueInput
  }

  /**
   * PlanTag deleteMany
   */
  export type PlanTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanTags to delete
     */
    where?: PlanTagWhereInput
    /**
     * Limit how many PlanTags to delete.
     */
    limit?: number
  }

  /**
   * PlanTag without action
   */
  export type PlanTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTag
     */
    select?: PlanTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTag
     */
    omit?: PlanTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanTagInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    emailVerified: 'emailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationCodeScalarFieldEnum: {
    id: 'id',
    email: 'email',
    code: 'code',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type VerificationCodeScalarFieldEnum = (typeof VerificationCodeScalarFieldEnum)[keyof typeof VerificationCodeScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    status: 'status',
    priority: 'priority',
    dueDate: 'dueDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const StudyPlanScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudyPlanScalarFieldEnum = (typeof StudyPlanScalarFieldEnum)[keyof typeof StudyPlanScalarFieldEnum]


  export const StudyItemScalarFieldEnum: {
    id: 'id',
    planId: 'planId',
    title: 'title',
    description: 'description',
    estimatedHours: 'estimatedHours',
    actualHours: 'actualHours',
    status: 'status',
    completionPercentage: 'completionPercentage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudyItemScalarFieldEnum = (typeof StudyItemScalarFieldEnum)[keyof typeof StudyItemScalarFieldEnum]


  export const StudyLogScalarFieldEnum: {
    id: 'id',
    itemId: 'itemId',
    studyDate: 'studyDate',
    hoursSpent: 'hoursSpent',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type StudyLogScalarFieldEnum = (typeof StudyLogScalarFieldEnum)[keyof typeof StudyLogScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    color: 'color',
    createdAt: 'createdAt'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const TaskTagScalarFieldEnum: {
    taskId: 'taskId',
    tagId: 'tagId'
  };

  export type TaskTagScalarFieldEnum = (typeof TaskTagScalarFieldEnum)[keyof typeof TaskTagScalarFieldEnum]


  export const PlanTagScalarFieldEnum: {
    planId: 'planId',
    tagId: 'tagId'
  };

  export type PlanTagScalarFieldEnum = (typeof PlanTagScalarFieldEnum)[keyof typeof PlanTagScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


  /**
   * Reference to a field of type 'PlanStatus'
   */
  export type EnumPlanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanStatus'>
    


  /**
   * Reference to a field of type 'PlanStatus[]'
   */
  export type ListEnumPlanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'ItemStatus'
   */
  export type EnumItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemStatus'>
    


  /**
   * Reference to a field of type 'ItemStatus[]'
   */
  export type ListEnumItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tasks?: TaskListRelationFilter
    studyPlans?: StudyPlanListRelationFilter
    tags?: TagListRelationFilter
    verificationCodes?: VerificationCodeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tasks?: TaskOrderByRelationAggregateInput
    studyPlans?: StudyPlanOrderByRelationAggregateInput
    tags?: TagOrderByRelationAggregateInput
    verificationCodes?: VerificationCodeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tasks?: TaskListRelationFilter
    studyPlans?: StudyPlanListRelationFilter
    tags?: TagListRelationFilter
    verificationCodes?: VerificationCodeListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VerificationCodeWhereInput = {
    AND?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    OR?: VerificationCodeWhereInput[]
    NOT?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    id?: IntFilter<"VerificationCode"> | number
    email?: StringFilter<"VerificationCode"> | string
    code?: StringFilter<"VerificationCode"> | string
    expiresAt?: DateTimeFilter<"VerificationCode"> | Date | string
    createdAt?: DateTimeFilter<"VerificationCode"> | Date | string
    userId?: IntNullableFilter<"VerificationCode"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type VerificationCodeOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type VerificationCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    OR?: VerificationCodeWhereInput[]
    NOT?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    code?: StringFilter<"VerificationCode"> | string
    expiresAt?: DateTimeFilter<"VerificationCode"> | Date | string
    createdAt?: DateTimeFilter<"VerificationCode"> | Date | string
    userId?: IntNullableFilter<"VerificationCode"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "email">

  export type VerificationCodeOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: VerificationCodeCountOrderByAggregateInput
    _avg?: VerificationCodeAvgOrderByAggregateInput
    _max?: VerificationCodeMaxOrderByAggregateInput
    _min?: VerificationCodeMinOrderByAggregateInput
    _sum?: VerificationCodeSumOrderByAggregateInput
  }

  export type VerificationCodeScalarWhereWithAggregatesInput = {
    AND?: VerificationCodeScalarWhereWithAggregatesInput | VerificationCodeScalarWhereWithAggregatesInput[]
    OR?: VerificationCodeScalarWhereWithAggregatesInput[]
    NOT?: VerificationCodeScalarWhereWithAggregatesInput | VerificationCodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VerificationCode"> | number
    email?: StringWithAggregatesFilter<"VerificationCode"> | string
    code?: StringWithAggregatesFilter<"VerificationCode"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"VerificationCode"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"VerificationCode"> | Date | string
    userId?: IntNullableWithAggregatesFilter<"VerificationCode"> | number | null
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: IntFilter<"Task"> | number
    userId?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    taskTags?: TaskTagListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    taskTags?: TaskTagOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    userId?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    taskTags?: TaskTagListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Task"> | number
    userId?: IntWithAggregatesFilter<"Task"> | number
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumPriorityWithAggregatesFilter<"Task"> | $Enums.Priority
    dueDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type StudyPlanWhereInput = {
    AND?: StudyPlanWhereInput | StudyPlanWhereInput[]
    OR?: StudyPlanWhereInput[]
    NOT?: StudyPlanWhereInput | StudyPlanWhereInput[]
    id?: IntFilter<"StudyPlan"> | number
    userId?: IntFilter<"StudyPlan"> | number
    title?: StringFilter<"StudyPlan"> | string
    description?: StringNullableFilter<"StudyPlan"> | string | null
    startDate?: DateTimeFilter<"StudyPlan"> | Date | string
    endDate?: DateTimeNullableFilter<"StudyPlan"> | Date | string | null
    status?: EnumPlanStatusFilter<"StudyPlan"> | $Enums.PlanStatus
    createdAt?: DateTimeFilter<"StudyPlan"> | Date | string
    updatedAt?: DateTimeFilter<"StudyPlan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    studyItems?: StudyItemListRelationFilter
    planTags?: PlanTagListRelationFilter
  }

  export type StudyPlanOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    studyItems?: StudyItemOrderByRelationAggregateInput
    planTags?: PlanTagOrderByRelationAggregateInput
  }

  export type StudyPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StudyPlanWhereInput | StudyPlanWhereInput[]
    OR?: StudyPlanWhereInput[]
    NOT?: StudyPlanWhereInput | StudyPlanWhereInput[]
    userId?: IntFilter<"StudyPlan"> | number
    title?: StringFilter<"StudyPlan"> | string
    description?: StringNullableFilter<"StudyPlan"> | string | null
    startDate?: DateTimeFilter<"StudyPlan"> | Date | string
    endDate?: DateTimeNullableFilter<"StudyPlan"> | Date | string | null
    status?: EnumPlanStatusFilter<"StudyPlan"> | $Enums.PlanStatus
    createdAt?: DateTimeFilter<"StudyPlan"> | Date | string
    updatedAt?: DateTimeFilter<"StudyPlan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    studyItems?: StudyItemListRelationFilter
    planTags?: PlanTagListRelationFilter
  }, "id">

  export type StudyPlanOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudyPlanCountOrderByAggregateInput
    _avg?: StudyPlanAvgOrderByAggregateInput
    _max?: StudyPlanMaxOrderByAggregateInput
    _min?: StudyPlanMinOrderByAggregateInput
    _sum?: StudyPlanSumOrderByAggregateInput
  }

  export type StudyPlanScalarWhereWithAggregatesInput = {
    AND?: StudyPlanScalarWhereWithAggregatesInput | StudyPlanScalarWhereWithAggregatesInput[]
    OR?: StudyPlanScalarWhereWithAggregatesInput[]
    NOT?: StudyPlanScalarWhereWithAggregatesInput | StudyPlanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StudyPlan"> | number
    userId?: IntWithAggregatesFilter<"StudyPlan"> | number
    title?: StringWithAggregatesFilter<"StudyPlan"> | string
    description?: StringNullableWithAggregatesFilter<"StudyPlan"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"StudyPlan"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"StudyPlan"> | Date | string | null
    status?: EnumPlanStatusWithAggregatesFilter<"StudyPlan"> | $Enums.PlanStatus
    createdAt?: DateTimeWithAggregatesFilter<"StudyPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudyPlan"> | Date | string
  }

  export type StudyItemWhereInput = {
    AND?: StudyItemWhereInput | StudyItemWhereInput[]
    OR?: StudyItemWhereInput[]
    NOT?: StudyItemWhereInput | StudyItemWhereInput[]
    id?: IntFilter<"StudyItem"> | number
    planId?: IntFilter<"StudyItem"> | number
    title?: StringFilter<"StudyItem"> | string
    description?: StringNullableFilter<"StudyItem"> | string | null
    estimatedHours?: DecimalNullableFilter<"StudyItem"> | Decimal | DecimalJsLike | number | string | null
    actualHours?: DecimalNullableFilter<"StudyItem"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumItemStatusFilter<"StudyItem"> | $Enums.ItemStatus
    completionPercentage?: IntFilter<"StudyItem"> | number
    createdAt?: DateTimeFilter<"StudyItem"> | Date | string
    updatedAt?: DateTimeFilter<"StudyItem"> | Date | string
    studyPlan?: XOR<StudyPlanScalarRelationFilter, StudyPlanWhereInput>
    studyLogs?: StudyLogListRelationFilter
  }

  export type StudyItemOrderByWithRelationInput = {
    id?: SortOrder
    planId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    estimatedHours?: SortOrderInput | SortOrder
    actualHours?: SortOrderInput | SortOrder
    status?: SortOrder
    completionPercentage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studyPlan?: StudyPlanOrderByWithRelationInput
    studyLogs?: StudyLogOrderByRelationAggregateInput
  }

  export type StudyItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StudyItemWhereInput | StudyItemWhereInput[]
    OR?: StudyItemWhereInput[]
    NOT?: StudyItemWhereInput | StudyItemWhereInput[]
    planId?: IntFilter<"StudyItem"> | number
    title?: StringFilter<"StudyItem"> | string
    description?: StringNullableFilter<"StudyItem"> | string | null
    estimatedHours?: DecimalNullableFilter<"StudyItem"> | Decimal | DecimalJsLike | number | string | null
    actualHours?: DecimalNullableFilter<"StudyItem"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumItemStatusFilter<"StudyItem"> | $Enums.ItemStatus
    completionPercentage?: IntFilter<"StudyItem"> | number
    createdAt?: DateTimeFilter<"StudyItem"> | Date | string
    updatedAt?: DateTimeFilter<"StudyItem"> | Date | string
    studyPlan?: XOR<StudyPlanScalarRelationFilter, StudyPlanWhereInput>
    studyLogs?: StudyLogListRelationFilter
  }, "id">

  export type StudyItemOrderByWithAggregationInput = {
    id?: SortOrder
    planId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    estimatedHours?: SortOrderInput | SortOrder
    actualHours?: SortOrderInput | SortOrder
    status?: SortOrder
    completionPercentage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudyItemCountOrderByAggregateInput
    _avg?: StudyItemAvgOrderByAggregateInput
    _max?: StudyItemMaxOrderByAggregateInput
    _min?: StudyItemMinOrderByAggregateInput
    _sum?: StudyItemSumOrderByAggregateInput
  }

  export type StudyItemScalarWhereWithAggregatesInput = {
    AND?: StudyItemScalarWhereWithAggregatesInput | StudyItemScalarWhereWithAggregatesInput[]
    OR?: StudyItemScalarWhereWithAggregatesInput[]
    NOT?: StudyItemScalarWhereWithAggregatesInput | StudyItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StudyItem"> | number
    planId?: IntWithAggregatesFilter<"StudyItem"> | number
    title?: StringWithAggregatesFilter<"StudyItem"> | string
    description?: StringNullableWithAggregatesFilter<"StudyItem"> | string | null
    estimatedHours?: DecimalNullableWithAggregatesFilter<"StudyItem"> | Decimal | DecimalJsLike | number | string | null
    actualHours?: DecimalNullableWithAggregatesFilter<"StudyItem"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumItemStatusWithAggregatesFilter<"StudyItem"> | $Enums.ItemStatus
    completionPercentage?: IntWithAggregatesFilter<"StudyItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StudyItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudyItem"> | Date | string
  }

  export type StudyLogWhereInput = {
    AND?: StudyLogWhereInput | StudyLogWhereInput[]
    OR?: StudyLogWhereInput[]
    NOT?: StudyLogWhereInput | StudyLogWhereInput[]
    id?: IntFilter<"StudyLog"> | number
    itemId?: IntFilter<"StudyLog"> | number
    studyDate?: DateTimeFilter<"StudyLog"> | Date | string
    hoursSpent?: DecimalFilter<"StudyLog"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"StudyLog"> | string | null
    createdAt?: DateTimeFilter<"StudyLog"> | Date | string
    studyItem?: XOR<StudyItemScalarRelationFilter, StudyItemWhereInput>
  }

  export type StudyLogOrderByWithRelationInput = {
    id?: SortOrder
    itemId?: SortOrder
    studyDate?: SortOrder
    hoursSpent?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    studyItem?: StudyItemOrderByWithRelationInput
  }

  export type StudyLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StudyLogWhereInput | StudyLogWhereInput[]
    OR?: StudyLogWhereInput[]
    NOT?: StudyLogWhereInput | StudyLogWhereInput[]
    itemId?: IntFilter<"StudyLog"> | number
    studyDate?: DateTimeFilter<"StudyLog"> | Date | string
    hoursSpent?: DecimalFilter<"StudyLog"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"StudyLog"> | string | null
    createdAt?: DateTimeFilter<"StudyLog"> | Date | string
    studyItem?: XOR<StudyItemScalarRelationFilter, StudyItemWhereInput>
  }, "id">

  export type StudyLogOrderByWithAggregationInput = {
    id?: SortOrder
    itemId?: SortOrder
    studyDate?: SortOrder
    hoursSpent?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: StudyLogCountOrderByAggregateInput
    _avg?: StudyLogAvgOrderByAggregateInput
    _max?: StudyLogMaxOrderByAggregateInput
    _min?: StudyLogMinOrderByAggregateInput
    _sum?: StudyLogSumOrderByAggregateInput
  }

  export type StudyLogScalarWhereWithAggregatesInput = {
    AND?: StudyLogScalarWhereWithAggregatesInput | StudyLogScalarWhereWithAggregatesInput[]
    OR?: StudyLogScalarWhereWithAggregatesInput[]
    NOT?: StudyLogScalarWhereWithAggregatesInput | StudyLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StudyLog"> | number
    itemId?: IntWithAggregatesFilter<"StudyLog"> | number
    studyDate?: DateTimeWithAggregatesFilter<"StudyLog"> | Date | string
    hoursSpent?: DecimalWithAggregatesFilter<"StudyLog"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableWithAggregatesFilter<"StudyLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StudyLog"> | Date | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: IntFilter<"Tag"> | number
    userId?: IntFilter<"Tag"> | number
    name?: StringFilter<"Tag"> | string
    color?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    taskTags?: TaskTagListRelationFilter
    planTags?: PlanTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    taskTags?: TaskTagOrderByRelationAggregateInput
    planTags?: PlanTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_name?: TagUserIdNameCompoundUniqueInput
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    userId?: IntFilter<"Tag"> | number
    name?: StringFilter<"Tag"> | string
    color?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    taskTags?: TaskTagListRelationFilter
    planTags?: PlanTagListRelationFilter
  }, "id" | "userId_name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tag"> | number
    userId?: IntWithAggregatesFilter<"Tag"> | number
    name?: StringWithAggregatesFilter<"Tag"> | string
    color?: StringWithAggregatesFilter<"Tag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
  }

  export type TaskTagWhereInput = {
    AND?: TaskTagWhereInput | TaskTagWhereInput[]
    OR?: TaskTagWhereInput[]
    NOT?: TaskTagWhereInput | TaskTagWhereInput[]
    taskId?: IntFilter<"TaskTag"> | number
    tagId?: IntFilter<"TaskTag"> | number
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type TaskTagOrderByWithRelationInput = {
    taskId?: SortOrder
    tagId?: SortOrder
    task?: TaskOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type TaskTagWhereUniqueInput = Prisma.AtLeast<{
    taskId_tagId?: TaskTagTaskIdTagIdCompoundUniqueInput
    AND?: TaskTagWhereInput | TaskTagWhereInput[]
    OR?: TaskTagWhereInput[]
    NOT?: TaskTagWhereInput | TaskTagWhereInput[]
    taskId?: IntFilter<"TaskTag"> | number
    tagId?: IntFilter<"TaskTag"> | number
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "taskId_tagId">

  export type TaskTagOrderByWithAggregationInput = {
    taskId?: SortOrder
    tagId?: SortOrder
    _count?: TaskTagCountOrderByAggregateInput
    _avg?: TaskTagAvgOrderByAggregateInput
    _max?: TaskTagMaxOrderByAggregateInput
    _min?: TaskTagMinOrderByAggregateInput
    _sum?: TaskTagSumOrderByAggregateInput
  }

  export type TaskTagScalarWhereWithAggregatesInput = {
    AND?: TaskTagScalarWhereWithAggregatesInput | TaskTagScalarWhereWithAggregatesInput[]
    OR?: TaskTagScalarWhereWithAggregatesInput[]
    NOT?: TaskTagScalarWhereWithAggregatesInput | TaskTagScalarWhereWithAggregatesInput[]
    taskId?: IntWithAggregatesFilter<"TaskTag"> | number
    tagId?: IntWithAggregatesFilter<"TaskTag"> | number
  }

  export type PlanTagWhereInput = {
    AND?: PlanTagWhereInput | PlanTagWhereInput[]
    OR?: PlanTagWhereInput[]
    NOT?: PlanTagWhereInput | PlanTagWhereInput[]
    planId?: IntFilter<"PlanTag"> | number
    tagId?: IntFilter<"PlanTag"> | number
    studyPlan?: XOR<StudyPlanScalarRelationFilter, StudyPlanWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type PlanTagOrderByWithRelationInput = {
    planId?: SortOrder
    tagId?: SortOrder
    studyPlan?: StudyPlanOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type PlanTagWhereUniqueInput = Prisma.AtLeast<{
    planId_tagId?: PlanTagPlanIdTagIdCompoundUniqueInput
    AND?: PlanTagWhereInput | PlanTagWhereInput[]
    OR?: PlanTagWhereInput[]
    NOT?: PlanTagWhereInput | PlanTagWhereInput[]
    planId?: IntFilter<"PlanTag"> | number
    tagId?: IntFilter<"PlanTag"> | number
    studyPlan?: XOR<StudyPlanScalarRelationFilter, StudyPlanWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "planId_tagId">

  export type PlanTagOrderByWithAggregationInput = {
    planId?: SortOrder
    tagId?: SortOrder
    _count?: PlanTagCountOrderByAggregateInput
    _avg?: PlanTagAvgOrderByAggregateInput
    _max?: PlanTagMaxOrderByAggregateInput
    _min?: PlanTagMinOrderByAggregateInput
    _sum?: PlanTagSumOrderByAggregateInput
  }

  export type PlanTagScalarWhereWithAggregatesInput = {
    AND?: PlanTagScalarWhereWithAggregatesInput | PlanTagScalarWhereWithAggregatesInput[]
    OR?: PlanTagScalarWhereWithAggregatesInput[]
    NOT?: PlanTagScalarWhereWithAggregatesInput | PlanTagScalarWhereWithAggregatesInput[]
    planId?: IntWithAggregatesFilter<"PlanTag"> | number
    tagId?: IntWithAggregatesFilter<"PlanTag"> | number
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanCreateNestedManyWithoutUserInput
    tags?: TagCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanUncheckedCreateNestedManyWithoutUserInput
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUpdateManyWithoutUserNestedInput
    tags?: TagUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUncheckedUpdateManyWithoutUserNestedInput
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeCreateInput = {
    email: string
    code: string
    expiresAt: Date | string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutVerificationCodesInput
  }

  export type VerificationCodeUncheckedCreateInput = {
    id?: number
    email: string
    code: string
    expiresAt: Date | string
    createdAt?: Date | string
    userId?: number | null
  }

  export type VerificationCodeUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutVerificationCodesNestedInput
  }

  export type VerificationCodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VerificationCodeCreateManyInput = {
    id?: number
    email: string
    code: string
    expiresAt: Date | string
    createdAt?: Date | string
    userId?: number | null
  }

  export type VerificationCodeUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TaskCreateInput = {
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTasksInput
    taskTags?: TaskTagCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: number
    userId: number
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taskTags?: TaskTagUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    taskTags?: TaskTagUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskTags?: TaskTagUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: number
    userId: number
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyPlanCreateInput = {
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStudyPlansInput
    studyItems?: StudyItemCreateNestedManyWithoutStudyPlanInput
    planTags?: PlanTagCreateNestedManyWithoutStudyPlanInput
  }

  export type StudyPlanUncheckedCreateInput = {
    id?: number
    userId: number
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    studyItems?: StudyItemUncheckedCreateNestedManyWithoutStudyPlanInput
    planTags?: PlanTagUncheckedCreateNestedManyWithoutStudyPlanInput
  }

  export type StudyPlanUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudyPlansNestedInput
    studyItems?: StudyItemUpdateManyWithoutStudyPlanNestedInput
    planTags?: PlanTagUpdateManyWithoutStudyPlanNestedInput
  }

  export type StudyPlanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyItems?: StudyItemUncheckedUpdateManyWithoutStudyPlanNestedInput
    planTags?: PlanTagUncheckedUpdateManyWithoutStudyPlanNestedInput
  }

  export type StudyPlanCreateManyInput = {
    id?: number
    userId: number
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudyPlanUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyPlanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyItemCreateInput = {
    title: string
    description?: string | null
    estimatedHours?: Decimal | DecimalJsLike | number | string | null
    actualHours?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.ItemStatus
    completionPercentage?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    studyPlan: StudyPlanCreateNestedOneWithoutStudyItemsInput
    studyLogs?: StudyLogCreateNestedManyWithoutStudyItemInput
  }

  export type StudyItemUncheckedCreateInput = {
    id?: number
    planId: number
    title: string
    description?: string | null
    estimatedHours?: Decimal | DecimalJsLike | number | string | null
    actualHours?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.ItemStatus
    completionPercentage?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    studyLogs?: StudyLogUncheckedCreateNestedManyWithoutStudyItemInput
  }

  export type StudyItemUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    completionPercentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyPlan?: StudyPlanUpdateOneRequiredWithoutStudyItemsNestedInput
    studyLogs?: StudyLogUpdateManyWithoutStudyItemNestedInput
  }

  export type StudyItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    planId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    completionPercentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyLogs?: StudyLogUncheckedUpdateManyWithoutStudyItemNestedInput
  }

  export type StudyItemCreateManyInput = {
    id?: number
    planId: number
    title: string
    description?: string | null
    estimatedHours?: Decimal | DecimalJsLike | number | string | null
    actualHours?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.ItemStatus
    completionPercentage?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudyItemUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    completionPercentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    planId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    completionPercentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyLogCreateInput = {
    studyDate: Date | string
    hoursSpent: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
    studyItem: StudyItemCreateNestedOneWithoutStudyLogsInput
  }

  export type StudyLogUncheckedCreateInput = {
    id?: number
    itemId: number
    studyDate: Date | string
    hoursSpent: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type StudyLogUpdateInput = {
    studyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyItem?: StudyItemUpdateOneRequiredWithoutStudyLogsNestedInput
  }

  export type StudyLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    studyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyLogCreateManyInput = {
    id?: number
    itemId: number
    studyDate: Date | string
    hoursSpent: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type StudyLogUpdateManyMutationInput = {
    studyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    studyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    name: string
    color?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTagsInput
    taskTags?: TaskTagCreateNestedManyWithoutTagInput
    planTags?: PlanTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: number
    userId: number
    name: string
    color?: string
    createdAt?: Date | string
    taskTags?: TaskTagUncheckedCreateNestedManyWithoutTagInput
    planTags?: PlanTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTagsNestedInput
    taskTags?: TaskTagUpdateManyWithoutTagNestedInput
    planTags?: PlanTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskTags?: TaskTagUncheckedUpdateManyWithoutTagNestedInput
    planTags?: PlanTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: number
    userId: number
    name: string
    color?: string
    createdAt?: Date | string
  }

  export type TagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskTagCreateInput = {
    task: TaskCreateNestedOneWithoutTaskTagsInput
    tag: TagCreateNestedOneWithoutTaskTagsInput
  }

  export type TaskTagUncheckedCreateInput = {
    taskId: number
    tagId: number
  }

  export type TaskTagUpdateInput = {
    task?: TaskUpdateOneRequiredWithoutTaskTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutTaskTagsNestedInput
  }

  export type TaskTagUncheckedUpdateInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskTagCreateManyInput = {
    taskId: number
    tagId: number
  }

  export type TaskTagUpdateManyMutationInput = {

  }

  export type TaskTagUncheckedUpdateManyInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type PlanTagCreateInput = {
    studyPlan: StudyPlanCreateNestedOneWithoutPlanTagsInput
    tag: TagCreateNestedOneWithoutPlanTagsInput
  }

  export type PlanTagUncheckedCreateInput = {
    planId: number
    tagId: number
  }

  export type PlanTagUpdateInput = {
    studyPlan?: StudyPlanUpdateOneRequiredWithoutPlanTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutPlanTagsNestedInput
  }

  export type PlanTagUncheckedUpdateInput = {
    planId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type PlanTagCreateManyInput = {
    planId: number
    tagId: number
  }

  export type PlanTagUpdateManyMutationInput = {

  }

  export type PlanTagUncheckedUpdateManyInput = {
    planId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type StudyPlanListRelationFilter = {
    every?: StudyPlanWhereInput
    some?: StudyPlanWhereInput
    none?: StudyPlanWhereInput
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type VerificationCodeListRelationFilter = {
    every?: VerificationCodeWhereInput
    some?: VerificationCodeWhereInput
    none?: VerificationCodeWhereInput
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudyPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VerificationCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VerificationCodeCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type VerificationCodeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type VerificationCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type VerificationCodeMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type VerificationCodeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TaskTagListRelationFilter = {
    every?: TaskTagWhereInput
    some?: TaskTagWhereInput
    none?: TaskTagWhereInput
  }

  export type TaskTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumPlanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusFilter<$PrismaModel> | $Enums.PlanStatus
  }

  export type StudyItemListRelationFilter = {
    every?: StudyItemWhereInput
    some?: StudyItemWhereInput
    none?: StudyItemWhereInput
  }

  export type PlanTagListRelationFilter = {
    every?: PlanTagWhereInput
    some?: PlanTagWhereInput
    none?: PlanTagWhereInput
  }

  export type StudyItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudyPlanCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudyPlanAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StudyPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudyPlanMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudyPlanSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumPlanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanStatusFilter<$PrismaModel>
    _max?: NestedEnumPlanStatusFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EnumItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusFilter<$PrismaModel> | $Enums.ItemStatus
  }

  export type StudyPlanScalarRelationFilter = {
    is?: StudyPlanWhereInput
    isNot?: StudyPlanWhereInput
  }

  export type StudyLogListRelationFilter = {
    every?: StudyLogWhereInput
    some?: StudyLogWhereInput
    none?: StudyLogWhereInput
  }

  export type StudyLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudyItemCountOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    estimatedHours?: SortOrder
    actualHours?: SortOrder
    status?: SortOrder
    completionPercentage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudyItemAvgOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    estimatedHours?: SortOrder
    actualHours?: SortOrder
    completionPercentage?: SortOrder
  }

  export type StudyItemMaxOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    estimatedHours?: SortOrder
    actualHours?: SortOrder
    status?: SortOrder
    completionPercentage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudyItemMinOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    estimatedHours?: SortOrder
    actualHours?: SortOrder
    status?: SortOrder
    completionPercentage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudyItemSumOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    estimatedHours?: SortOrder
    actualHours?: SortOrder
    completionPercentage?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemStatusFilter<$PrismaModel>
    _max?: NestedEnumItemStatusFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type StudyItemScalarRelationFilter = {
    is?: StudyItemWhereInput
    isNot?: StudyItemWhereInput
  }

  export type StudyLogCountOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    studyDate?: SortOrder
    hoursSpent?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type StudyLogAvgOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    hoursSpent?: SortOrder
  }

  export type StudyLogMaxOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    studyDate?: SortOrder
    hoursSpent?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type StudyLogMinOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    studyDate?: SortOrder
    hoursSpent?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type StudyLogSumOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    hoursSpent?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type TagUserIdNameCompoundUniqueInput = {
    userId: number
    name: string
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type TaskTagTaskIdTagIdCompoundUniqueInput = {
    taskId: number
    tagId: number
  }

  export type TaskTagCountOrderByAggregateInput = {
    taskId?: SortOrder
    tagId?: SortOrder
  }

  export type TaskTagAvgOrderByAggregateInput = {
    taskId?: SortOrder
    tagId?: SortOrder
  }

  export type TaskTagMaxOrderByAggregateInput = {
    taskId?: SortOrder
    tagId?: SortOrder
  }

  export type TaskTagMinOrderByAggregateInput = {
    taskId?: SortOrder
    tagId?: SortOrder
  }

  export type TaskTagSumOrderByAggregateInput = {
    taskId?: SortOrder
    tagId?: SortOrder
  }

  export type PlanTagPlanIdTagIdCompoundUniqueInput = {
    planId: number
    tagId: number
  }

  export type PlanTagCountOrderByAggregateInput = {
    planId?: SortOrder
    tagId?: SortOrder
  }

  export type PlanTagAvgOrderByAggregateInput = {
    planId?: SortOrder
    tagId?: SortOrder
  }

  export type PlanTagMaxOrderByAggregateInput = {
    planId?: SortOrder
    tagId?: SortOrder
  }

  export type PlanTagMinOrderByAggregateInput = {
    planId?: SortOrder
    tagId?: SortOrder
  }

  export type PlanTagSumOrderByAggregateInput = {
    planId?: SortOrder
    tagId?: SortOrder
  }

  export type TaskCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type StudyPlanCreateNestedManyWithoutUserInput = {
    create?: XOR<StudyPlanCreateWithoutUserInput, StudyPlanUncheckedCreateWithoutUserInput> | StudyPlanCreateWithoutUserInput[] | StudyPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudyPlanCreateOrConnectWithoutUserInput | StudyPlanCreateOrConnectWithoutUserInput[]
    createMany?: StudyPlanCreateManyUserInputEnvelope
    connect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutUserInput = {
    create?: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput> | TagCreateWithoutUserInput[] | TagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUserInput | TagCreateOrConnectWithoutUserInput[]
    createMany?: TagCreateManyUserInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type VerificationCodeCreateNestedManyWithoutUserInput = {
    create?: XOR<VerificationCodeCreateWithoutUserInput, VerificationCodeUncheckedCreateWithoutUserInput> | VerificationCodeCreateWithoutUserInput[] | VerificationCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCodeCreateOrConnectWithoutUserInput | VerificationCodeCreateOrConnectWithoutUserInput[]
    createMany?: VerificationCodeCreateManyUserInputEnvelope
    connect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type StudyPlanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StudyPlanCreateWithoutUserInput, StudyPlanUncheckedCreateWithoutUserInput> | StudyPlanCreateWithoutUserInput[] | StudyPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudyPlanCreateOrConnectWithoutUserInput | StudyPlanCreateOrConnectWithoutUserInput[]
    createMany?: StudyPlanCreateManyUserInputEnvelope
    connect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput> | TagCreateWithoutUserInput[] | TagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUserInput | TagCreateOrConnectWithoutUserInput[]
    createMany?: TagCreateManyUserInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type VerificationCodeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VerificationCodeCreateWithoutUserInput, VerificationCodeUncheckedCreateWithoutUserInput> | VerificationCodeCreateWithoutUserInput[] | VerificationCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCodeCreateOrConnectWithoutUserInput | VerificationCodeCreateOrConnectWithoutUserInput[]
    createMany?: VerificationCodeCreateManyUserInputEnvelope
    connect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type StudyPlanUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudyPlanCreateWithoutUserInput, StudyPlanUncheckedCreateWithoutUserInput> | StudyPlanCreateWithoutUserInput[] | StudyPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudyPlanCreateOrConnectWithoutUserInput | StudyPlanCreateOrConnectWithoutUserInput[]
    upsert?: StudyPlanUpsertWithWhereUniqueWithoutUserInput | StudyPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudyPlanCreateManyUserInputEnvelope
    set?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    disconnect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    delete?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    connect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    update?: StudyPlanUpdateWithWhereUniqueWithoutUserInput | StudyPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudyPlanUpdateManyWithWhereWithoutUserInput | StudyPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudyPlanScalarWhereInput | StudyPlanScalarWhereInput[]
  }

  export type TagUpdateManyWithoutUserNestedInput = {
    create?: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput> | TagCreateWithoutUserInput[] | TagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUserInput | TagCreateOrConnectWithoutUserInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutUserInput | TagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TagCreateManyUserInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutUserInput | TagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TagUpdateManyWithWhereWithoutUserInput | TagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type VerificationCodeUpdateManyWithoutUserNestedInput = {
    create?: XOR<VerificationCodeCreateWithoutUserInput, VerificationCodeUncheckedCreateWithoutUserInput> | VerificationCodeCreateWithoutUserInput[] | VerificationCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCodeCreateOrConnectWithoutUserInput | VerificationCodeCreateOrConnectWithoutUserInput[]
    upsert?: VerificationCodeUpsertWithWhereUniqueWithoutUserInput | VerificationCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VerificationCodeCreateManyUserInputEnvelope
    set?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    disconnect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    delete?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    connect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    update?: VerificationCodeUpdateWithWhereUniqueWithoutUserInput | VerificationCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VerificationCodeUpdateManyWithWhereWithoutUserInput | VerificationCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VerificationCodeScalarWhereInput | VerificationCodeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type StudyPlanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudyPlanCreateWithoutUserInput, StudyPlanUncheckedCreateWithoutUserInput> | StudyPlanCreateWithoutUserInput[] | StudyPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudyPlanCreateOrConnectWithoutUserInput | StudyPlanCreateOrConnectWithoutUserInput[]
    upsert?: StudyPlanUpsertWithWhereUniqueWithoutUserInput | StudyPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudyPlanCreateManyUserInputEnvelope
    set?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    disconnect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    delete?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    connect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    update?: StudyPlanUpdateWithWhereUniqueWithoutUserInput | StudyPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudyPlanUpdateManyWithWhereWithoutUserInput | StudyPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudyPlanScalarWhereInput | StudyPlanScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput> | TagCreateWithoutUserInput[] | TagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUserInput | TagCreateOrConnectWithoutUserInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutUserInput | TagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TagCreateManyUserInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutUserInput | TagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TagUpdateManyWithWhereWithoutUserInput | TagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type VerificationCodeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VerificationCodeCreateWithoutUserInput, VerificationCodeUncheckedCreateWithoutUserInput> | VerificationCodeCreateWithoutUserInput[] | VerificationCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCodeCreateOrConnectWithoutUserInput | VerificationCodeCreateOrConnectWithoutUserInput[]
    upsert?: VerificationCodeUpsertWithWhereUniqueWithoutUserInput | VerificationCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VerificationCodeCreateManyUserInputEnvelope
    set?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    disconnect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    delete?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    connect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    update?: VerificationCodeUpdateWithWhereUniqueWithoutUserInput | VerificationCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VerificationCodeUpdateManyWithWhereWithoutUserInput | VerificationCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VerificationCodeScalarWhereInput | VerificationCodeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVerificationCodesInput = {
    create?: XOR<UserCreateWithoutVerificationCodesInput, UserUncheckedCreateWithoutVerificationCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationCodesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutVerificationCodesNestedInput = {
    create?: XOR<UserCreateWithoutVerificationCodesInput, UserUncheckedCreateWithoutVerificationCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationCodesInput
    upsert?: UserUpsertWithoutVerificationCodesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerificationCodesInput, UserUpdateWithoutVerificationCodesInput>, UserUncheckedUpdateWithoutVerificationCodesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    connect?: UserWhereUniqueInput
  }

  export type TaskTagCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskTagCreateWithoutTaskInput, TaskTagUncheckedCreateWithoutTaskInput> | TaskTagCreateWithoutTaskInput[] | TaskTagUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutTaskInput | TaskTagCreateOrConnectWithoutTaskInput[]
    createMany?: TaskTagCreateManyTaskInputEnvelope
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
  }

  export type TaskTagUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskTagCreateWithoutTaskInput, TaskTagUncheckedCreateWithoutTaskInput> | TaskTagCreateWithoutTaskInput[] | TaskTagUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutTaskInput | TaskTagCreateOrConnectWithoutTaskInput[]
    createMany?: TaskTagCreateManyTaskInputEnvelope
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    upsert?: UserUpsertWithoutTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksInput, UserUpdateWithoutTasksInput>, UserUncheckedUpdateWithoutTasksInput>
  }

  export type TaskTagUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskTagCreateWithoutTaskInput, TaskTagUncheckedCreateWithoutTaskInput> | TaskTagCreateWithoutTaskInput[] | TaskTagUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutTaskInput | TaskTagCreateOrConnectWithoutTaskInput[]
    upsert?: TaskTagUpsertWithWhereUniqueWithoutTaskInput | TaskTagUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskTagCreateManyTaskInputEnvelope
    set?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    disconnect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    delete?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    update?: TaskTagUpdateWithWhereUniqueWithoutTaskInput | TaskTagUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskTagUpdateManyWithWhereWithoutTaskInput | TaskTagUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskTagScalarWhereInput | TaskTagScalarWhereInput[]
  }

  export type TaskTagUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskTagCreateWithoutTaskInput, TaskTagUncheckedCreateWithoutTaskInput> | TaskTagCreateWithoutTaskInput[] | TaskTagUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutTaskInput | TaskTagCreateOrConnectWithoutTaskInput[]
    upsert?: TaskTagUpsertWithWhereUniqueWithoutTaskInput | TaskTagUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskTagCreateManyTaskInputEnvelope
    set?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    disconnect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    delete?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    update?: TaskTagUpdateWithWhereUniqueWithoutTaskInput | TaskTagUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskTagUpdateManyWithWhereWithoutTaskInput | TaskTagUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskTagScalarWhereInput | TaskTagScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStudyPlansInput = {
    create?: XOR<UserCreateWithoutStudyPlansInput, UserUncheckedCreateWithoutStudyPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudyPlansInput
    connect?: UserWhereUniqueInput
  }

  export type StudyItemCreateNestedManyWithoutStudyPlanInput = {
    create?: XOR<StudyItemCreateWithoutStudyPlanInput, StudyItemUncheckedCreateWithoutStudyPlanInput> | StudyItemCreateWithoutStudyPlanInput[] | StudyItemUncheckedCreateWithoutStudyPlanInput[]
    connectOrCreate?: StudyItemCreateOrConnectWithoutStudyPlanInput | StudyItemCreateOrConnectWithoutStudyPlanInput[]
    createMany?: StudyItemCreateManyStudyPlanInputEnvelope
    connect?: StudyItemWhereUniqueInput | StudyItemWhereUniqueInput[]
  }

  export type PlanTagCreateNestedManyWithoutStudyPlanInput = {
    create?: XOR<PlanTagCreateWithoutStudyPlanInput, PlanTagUncheckedCreateWithoutStudyPlanInput> | PlanTagCreateWithoutStudyPlanInput[] | PlanTagUncheckedCreateWithoutStudyPlanInput[]
    connectOrCreate?: PlanTagCreateOrConnectWithoutStudyPlanInput | PlanTagCreateOrConnectWithoutStudyPlanInput[]
    createMany?: PlanTagCreateManyStudyPlanInputEnvelope
    connect?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
  }

  export type StudyItemUncheckedCreateNestedManyWithoutStudyPlanInput = {
    create?: XOR<StudyItemCreateWithoutStudyPlanInput, StudyItemUncheckedCreateWithoutStudyPlanInput> | StudyItemCreateWithoutStudyPlanInput[] | StudyItemUncheckedCreateWithoutStudyPlanInput[]
    connectOrCreate?: StudyItemCreateOrConnectWithoutStudyPlanInput | StudyItemCreateOrConnectWithoutStudyPlanInput[]
    createMany?: StudyItemCreateManyStudyPlanInputEnvelope
    connect?: StudyItemWhereUniqueInput | StudyItemWhereUniqueInput[]
  }

  export type PlanTagUncheckedCreateNestedManyWithoutStudyPlanInput = {
    create?: XOR<PlanTagCreateWithoutStudyPlanInput, PlanTagUncheckedCreateWithoutStudyPlanInput> | PlanTagCreateWithoutStudyPlanInput[] | PlanTagUncheckedCreateWithoutStudyPlanInput[]
    connectOrCreate?: PlanTagCreateOrConnectWithoutStudyPlanInput | PlanTagCreateOrConnectWithoutStudyPlanInput[]
    createMany?: PlanTagCreateManyStudyPlanInputEnvelope
    connect?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
  }

  export type EnumPlanStatusFieldUpdateOperationsInput = {
    set?: $Enums.PlanStatus
  }

  export type UserUpdateOneRequiredWithoutStudyPlansNestedInput = {
    create?: XOR<UserCreateWithoutStudyPlansInput, UserUncheckedCreateWithoutStudyPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudyPlansInput
    upsert?: UserUpsertWithoutStudyPlansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudyPlansInput, UserUpdateWithoutStudyPlansInput>, UserUncheckedUpdateWithoutStudyPlansInput>
  }

  export type StudyItemUpdateManyWithoutStudyPlanNestedInput = {
    create?: XOR<StudyItemCreateWithoutStudyPlanInput, StudyItemUncheckedCreateWithoutStudyPlanInput> | StudyItemCreateWithoutStudyPlanInput[] | StudyItemUncheckedCreateWithoutStudyPlanInput[]
    connectOrCreate?: StudyItemCreateOrConnectWithoutStudyPlanInput | StudyItemCreateOrConnectWithoutStudyPlanInput[]
    upsert?: StudyItemUpsertWithWhereUniqueWithoutStudyPlanInput | StudyItemUpsertWithWhereUniqueWithoutStudyPlanInput[]
    createMany?: StudyItemCreateManyStudyPlanInputEnvelope
    set?: StudyItemWhereUniqueInput | StudyItemWhereUniqueInput[]
    disconnect?: StudyItemWhereUniqueInput | StudyItemWhereUniqueInput[]
    delete?: StudyItemWhereUniqueInput | StudyItemWhereUniqueInput[]
    connect?: StudyItemWhereUniqueInput | StudyItemWhereUniqueInput[]
    update?: StudyItemUpdateWithWhereUniqueWithoutStudyPlanInput | StudyItemUpdateWithWhereUniqueWithoutStudyPlanInput[]
    updateMany?: StudyItemUpdateManyWithWhereWithoutStudyPlanInput | StudyItemUpdateManyWithWhereWithoutStudyPlanInput[]
    deleteMany?: StudyItemScalarWhereInput | StudyItemScalarWhereInput[]
  }

  export type PlanTagUpdateManyWithoutStudyPlanNestedInput = {
    create?: XOR<PlanTagCreateWithoutStudyPlanInput, PlanTagUncheckedCreateWithoutStudyPlanInput> | PlanTagCreateWithoutStudyPlanInput[] | PlanTagUncheckedCreateWithoutStudyPlanInput[]
    connectOrCreate?: PlanTagCreateOrConnectWithoutStudyPlanInput | PlanTagCreateOrConnectWithoutStudyPlanInput[]
    upsert?: PlanTagUpsertWithWhereUniqueWithoutStudyPlanInput | PlanTagUpsertWithWhereUniqueWithoutStudyPlanInput[]
    createMany?: PlanTagCreateManyStudyPlanInputEnvelope
    set?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    disconnect?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    delete?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    connect?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    update?: PlanTagUpdateWithWhereUniqueWithoutStudyPlanInput | PlanTagUpdateWithWhereUniqueWithoutStudyPlanInput[]
    updateMany?: PlanTagUpdateManyWithWhereWithoutStudyPlanInput | PlanTagUpdateManyWithWhereWithoutStudyPlanInput[]
    deleteMany?: PlanTagScalarWhereInput | PlanTagScalarWhereInput[]
  }

  export type StudyItemUncheckedUpdateManyWithoutStudyPlanNestedInput = {
    create?: XOR<StudyItemCreateWithoutStudyPlanInput, StudyItemUncheckedCreateWithoutStudyPlanInput> | StudyItemCreateWithoutStudyPlanInput[] | StudyItemUncheckedCreateWithoutStudyPlanInput[]
    connectOrCreate?: StudyItemCreateOrConnectWithoutStudyPlanInput | StudyItemCreateOrConnectWithoutStudyPlanInput[]
    upsert?: StudyItemUpsertWithWhereUniqueWithoutStudyPlanInput | StudyItemUpsertWithWhereUniqueWithoutStudyPlanInput[]
    createMany?: StudyItemCreateManyStudyPlanInputEnvelope
    set?: StudyItemWhereUniqueInput | StudyItemWhereUniqueInput[]
    disconnect?: StudyItemWhereUniqueInput | StudyItemWhereUniqueInput[]
    delete?: StudyItemWhereUniqueInput | StudyItemWhereUniqueInput[]
    connect?: StudyItemWhereUniqueInput | StudyItemWhereUniqueInput[]
    update?: StudyItemUpdateWithWhereUniqueWithoutStudyPlanInput | StudyItemUpdateWithWhereUniqueWithoutStudyPlanInput[]
    updateMany?: StudyItemUpdateManyWithWhereWithoutStudyPlanInput | StudyItemUpdateManyWithWhereWithoutStudyPlanInput[]
    deleteMany?: StudyItemScalarWhereInput | StudyItemScalarWhereInput[]
  }

  export type PlanTagUncheckedUpdateManyWithoutStudyPlanNestedInput = {
    create?: XOR<PlanTagCreateWithoutStudyPlanInput, PlanTagUncheckedCreateWithoutStudyPlanInput> | PlanTagCreateWithoutStudyPlanInput[] | PlanTagUncheckedCreateWithoutStudyPlanInput[]
    connectOrCreate?: PlanTagCreateOrConnectWithoutStudyPlanInput | PlanTagCreateOrConnectWithoutStudyPlanInput[]
    upsert?: PlanTagUpsertWithWhereUniqueWithoutStudyPlanInput | PlanTagUpsertWithWhereUniqueWithoutStudyPlanInput[]
    createMany?: PlanTagCreateManyStudyPlanInputEnvelope
    set?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    disconnect?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    delete?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    connect?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    update?: PlanTagUpdateWithWhereUniqueWithoutStudyPlanInput | PlanTagUpdateWithWhereUniqueWithoutStudyPlanInput[]
    updateMany?: PlanTagUpdateManyWithWhereWithoutStudyPlanInput | PlanTagUpdateManyWithWhereWithoutStudyPlanInput[]
    deleteMany?: PlanTagScalarWhereInput | PlanTagScalarWhereInput[]
  }

  export type StudyPlanCreateNestedOneWithoutStudyItemsInput = {
    create?: XOR<StudyPlanCreateWithoutStudyItemsInput, StudyPlanUncheckedCreateWithoutStudyItemsInput>
    connectOrCreate?: StudyPlanCreateOrConnectWithoutStudyItemsInput
    connect?: StudyPlanWhereUniqueInput
  }

  export type StudyLogCreateNestedManyWithoutStudyItemInput = {
    create?: XOR<StudyLogCreateWithoutStudyItemInput, StudyLogUncheckedCreateWithoutStudyItemInput> | StudyLogCreateWithoutStudyItemInput[] | StudyLogUncheckedCreateWithoutStudyItemInput[]
    connectOrCreate?: StudyLogCreateOrConnectWithoutStudyItemInput | StudyLogCreateOrConnectWithoutStudyItemInput[]
    createMany?: StudyLogCreateManyStudyItemInputEnvelope
    connect?: StudyLogWhereUniqueInput | StudyLogWhereUniqueInput[]
  }

  export type StudyLogUncheckedCreateNestedManyWithoutStudyItemInput = {
    create?: XOR<StudyLogCreateWithoutStudyItemInput, StudyLogUncheckedCreateWithoutStudyItemInput> | StudyLogCreateWithoutStudyItemInput[] | StudyLogUncheckedCreateWithoutStudyItemInput[]
    connectOrCreate?: StudyLogCreateOrConnectWithoutStudyItemInput | StudyLogCreateOrConnectWithoutStudyItemInput[]
    createMany?: StudyLogCreateManyStudyItemInputEnvelope
    connect?: StudyLogWhereUniqueInput | StudyLogWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumItemStatusFieldUpdateOperationsInput = {
    set?: $Enums.ItemStatus
  }

  export type StudyPlanUpdateOneRequiredWithoutStudyItemsNestedInput = {
    create?: XOR<StudyPlanCreateWithoutStudyItemsInput, StudyPlanUncheckedCreateWithoutStudyItemsInput>
    connectOrCreate?: StudyPlanCreateOrConnectWithoutStudyItemsInput
    upsert?: StudyPlanUpsertWithoutStudyItemsInput
    connect?: StudyPlanWhereUniqueInput
    update?: XOR<XOR<StudyPlanUpdateToOneWithWhereWithoutStudyItemsInput, StudyPlanUpdateWithoutStudyItemsInput>, StudyPlanUncheckedUpdateWithoutStudyItemsInput>
  }

  export type StudyLogUpdateManyWithoutStudyItemNestedInput = {
    create?: XOR<StudyLogCreateWithoutStudyItemInput, StudyLogUncheckedCreateWithoutStudyItemInput> | StudyLogCreateWithoutStudyItemInput[] | StudyLogUncheckedCreateWithoutStudyItemInput[]
    connectOrCreate?: StudyLogCreateOrConnectWithoutStudyItemInput | StudyLogCreateOrConnectWithoutStudyItemInput[]
    upsert?: StudyLogUpsertWithWhereUniqueWithoutStudyItemInput | StudyLogUpsertWithWhereUniqueWithoutStudyItemInput[]
    createMany?: StudyLogCreateManyStudyItemInputEnvelope
    set?: StudyLogWhereUniqueInput | StudyLogWhereUniqueInput[]
    disconnect?: StudyLogWhereUniqueInput | StudyLogWhereUniqueInput[]
    delete?: StudyLogWhereUniqueInput | StudyLogWhereUniqueInput[]
    connect?: StudyLogWhereUniqueInput | StudyLogWhereUniqueInput[]
    update?: StudyLogUpdateWithWhereUniqueWithoutStudyItemInput | StudyLogUpdateWithWhereUniqueWithoutStudyItemInput[]
    updateMany?: StudyLogUpdateManyWithWhereWithoutStudyItemInput | StudyLogUpdateManyWithWhereWithoutStudyItemInput[]
    deleteMany?: StudyLogScalarWhereInput | StudyLogScalarWhereInput[]
  }

  export type StudyLogUncheckedUpdateManyWithoutStudyItemNestedInput = {
    create?: XOR<StudyLogCreateWithoutStudyItemInput, StudyLogUncheckedCreateWithoutStudyItemInput> | StudyLogCreateWithoutStudyItemInput[] | StudyLogUncheckedCreateWithoutStudyItemInput[]
    connectOrCreate?: StudyLogCreateOrConnectWithoutStudyItemInput | StudyLogCreateOrConnectWithoutStudyItemInput[]
    upsert?: StudyLogUpsertWithWhereUniqueWithoutStudyItemInput | StudyLogUpsertWithWhereUniqueWithoutStudyItemInput[]
    createMany?: StudyLogCreateManyStudyItemInputEnvelope
    set?: StudyLogWhereUniqueInput | StudyLogWhereUniqueInput[]
    disconnect?: StudyLogWhereUniqueInput | StudyLogWhereUniqueInput[]
    delete?: StudyLogWhereUniqueInput | StudyLogWhereUniqueInput[]
    connect?: StudyLogWhereUniqueInput | StudyLogWhereUniqueInput[]
    update?: StudyLogUpdateWithWhereUniqueWithoutStudyItemInput | StudyLogUpdateWithWhereUniqueWithoutStudyItemInput[]
    updateMany?: StudyLogUpdateManyWithWhereWithoutStudyItemInput | StudyLogUpdateManyWithWhereWithoutStudyItemInput[]
    deleteMany?: StudyLogScalarWhereInput | StudyLogScalarWhereInput[]
  }

  export type StudyItemCreateNestedOneWithoutStudyLogsInput = {
    create?: XOR<StudyItemCreateWithoutStudyLogsInput, StudyItemUncheckedCreateWithoutStudyLogsInput>
    connectOrCreate?: StudyItemCreateOrConnectWithoutStudyLogsInput
    connect?: StudyItemWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type StudyItemUpdateOneRequiredWithoutStudyLogsNestedInput = {
    create?: XOR<StudyItemCreateWithoutStudyLogsInput, StudyItemUncheckedCreateWithoutStudyLogsInput>
    connectOrCreate?: StudyItemCreateOrConnectWithoutStudyLogsInput
    upsert?: StudyItemUpsertWithoutStudyLogsInput
    connect?: StudyItemWhereUniqueInput
    update?: XOR<XOR<StudyItemUpdateToOneWithWhereWithoutStudyLogsInput, StudyItemUpdateWithoutStudyLogsInput>, StudyItemUncheckedUpdateWithoutStudyLogsInput>
  }

  export type UserCreateNestedOneWithoutTagsInput = {
    create?: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTagsInput
    connect?: UserWhereUniqueInput
  }

  export type TaskTagCreateNestedManyWithoutTagInput = {
    create?: XOR<TaskTagCreateWithoutTagInput, TaskTagUncheckedCreateWithoutTagInput> | TaskTagCreateWithoutTagInput[] | TaskTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutTagInput | TaskTagCreateOrConnectWithoutTagInput[]
    createMany?: TaskTagCreateManyTagInputEnvelope
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
  }

  export type PlanTagCreateNestedManyWithoutTagInput = {
    create?: XOR<PlanTagCreateWithoutTagInput, PlanTagUncheckedCreateWithoutTagInput> | PlanTagCreateWithoutTagInput[] | PlanTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PlanTagCreateOrConnectWithoutTagInput | PlanTagCreateOrConnectWithoutTagInput[]
    createMany?: PlanTagCreateManyTagInputEnvelope
    connect?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
  }

  export type TaskTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<TaskTagCreateWithoutTagInput, TaskTagUncheckedCreateWithoutTagInput> | TaskTagCreateWithoutTagInput[] | TaskTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutTagInput | TaskTagCreateOrConnectWithoutTagInput[]
    createMany?: TaskTagCreateManyTagInputEnvelope
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
  }

  export type PlanTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<PlanTagCreateWithoutTagInput, PlanTagUncheckedCreateWithoutTagInput> | PlanTagCreateWithoutTagInput[] | PlanTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PlanTagCreateOrConnectWithoutTagInput | PlanTagCreateOrConnectWithoutTagInput[]
    createMany?: PlanTagCreateManyTagInputEnvelope
    connect?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTagsInput
    upsert?: UserUpsertWithoutTagsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTagsInput, UserUpdateWithoutTagsInput>, UserUncheckedUpdateWithoutTagsInput>
  }

  export type TaskTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<TaskTagCreateWithoutTagInput, TaskTagUncheckedCreateWithoutTagInput> | TaskTagCreateWithoutTagInput[] | TaskTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutTagInput | TaskTagCreateOrConnectWithoutTagInput[]
    upsert?: TaskTagUpsertWithWhereUniqueWithoutTagInput | TaskTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: TaskTagCreateManyTagInputEnvelope
    set?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    disconnect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    delete?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    update?: TaskTagUpdateWithWhereUniqueWithoutTagInput | TaskTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: TaskTagUpdateManyWithWhereWithoutTagInput | TaskTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: TaskTagScalarWhereInput | TaskTagScalarWhereInput[]
  }

  export type PlanTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<PlanTagCreateWithoutTagInput, PlanTagUncheckedCreateWithoutTagInput> | PlanTagCreateWithoutTagInput[] | PlanTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PlanTagCreateOrConnectWithoutTagInput | PlanTagCreateOrConnectWithoutTagInput[]
    upsert?: PlanTagUpsertWithWhereUniqueWithoutTagInput | PlanTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: PlanTagCreateManyTagInputEnvelope
    set?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    disconnect?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    delete?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    connect?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    update?: PlanTagUpdateWithWhereUniqueWithoutTagInput | PlanTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: PlanTagUpdateManyWithWhereWithoutTagInput | PlanTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: PlanTagScalarWhereInput | PlanTagScalarWhereInput[]
  }

  export type TaskTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<TaskTagCreateWithoutTagInput, TaskTagUncheckedCreateWithoutTagInput> | TaskTagCreateWithoutTagInput[] | TaskTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutTagInput | TaskTagCreateOrConnectWithoutTagInput[]
    upsert?: TaskTagUpsertWithWhereUniqueWithoutTagInput | TaskTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: TaskTagCreateManyTagInputEnvelope
    set?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    disconnect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    delete?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    update?: TaskTagUpdateWithWhereUniqueWithoutTagInput | TaskTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: TaskTagUpdateManyWithWhereWithoutTagInput | TaskTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: TaskTagScalarWhereInput | TaskTagScalarWhereInput[]
  }

  export type PlanTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<PlanTagCreateWithoutTagInput, PlanTagUncheckedCreateWithoutTagInput> | PlanTagCreateWithoutTagInput[] | PlanTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PlanTagCreateOrConnectWithoutTagInput | PlanTagCreateOrConnectWithoutTagInput[]
    upsert?: PlanTagUpsertWithWhereUniqueWithoutTagInput | PlanTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: PlanTagCreateManyTagInputEnvelope
    set?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    disconnect?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    delete?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    connect?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    update?: PlanTagUpdateWithWhereUniqueWithoutTagInput | PlanTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: PlanTagUpdateManyWithWhereWithoutTagInput | PlanTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: PlanTagScalarWhereInput | PlanTagScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutTaskTagsInput = {
    create?: XOR<TaskCreateWithoutTaskTagsInput, TaskUncheckedCreateWithoutTaskTagsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutTaskTagsInput
    connect?: TaskWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutTaskTagsInput = {
    create?: XOR<TagCreateWithoutTaskTagsInput, TagUncheckedCreateWithoutTaskTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutTaskTagsInput
    connect?: TagWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutTaskTagsNestedInput = {
    create?: XOR<TaskCreateWithoutTaskTagsInput, TaskUncheckedCreateWithoutTaskTagsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutTaskTagsInput
    upsert?: TaskUpsertWithoutTaskTagsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutTaskTagsInput, TaskUpdateWithoutTaskTagsInput>, TaskUncheckedUpdateWithoutTaskTagsInput>
  }

  export type TagUpdateOneRequiredWithoutTaskTagsNestedInput = {
    create?: XOR<TagCreateWithoutTaskTagsInput, TagUncheckedCreateWithoutTaskTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutTaskTagsInput
    upsert?: TagUpsertWithoutTaskTagsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutTaskTagsInput, TagUpdateWithoutTaskTagsInput>, TagUncheckedUpdateWithoutTaskTagsInput>
  }

  export type StudyPlanCreateNestedOneWithoutPlanTagsInput = {
    create?: XOR<StudyPlanCreateWithoutPlanTagsInput, StudyPlanUncheckedCreateWithoutPlanTagsInput>
    connectOrCreate?: StudyPlanCreateOrConnectWithoutPlanTagsInput
    connect?: StudyPlanWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutPlanTagsInput = {
    create?: XOR<TagCreateWithoutPlanTagsInput, TagUncheckedCreateWithoutPlanTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutPlanTagsInput
    connect?: TagWhereUniqueInput
  }

  export type StudyPlanUpdateOneRequiredWithoutPlanTagsNestedInput = {
    create?: XOR<StudyPlanCreateWithoutPlanTagsInput, StudyPlanUncheckedCreateWithoutPlanTagsInput>
    connectOrCreate?: StudyPlanCreateOrConnectWithoutPlanTagsInput
    upsert?: StudyPlanUpsertWithoutPlanTagsInput
    connect?: StudyPlanWhereUniqueInput
    update?: XOR<XOR<StudyPlanUpdateToOneWithWhereWithoutPlanTagsInput, StudyPlanUpdateWithoutPlanTagsInput>, StudyPlanUncheckedUpdateWithoutPlanTagsInput>
  }

  export type TagUpdateOneRequiredWithoutPlanTagsNestedInput = {
    create?: XOR<TagCreateWithoutPlanTagsInput, TagUncheckedCreateWithoutPlanTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutPlanTagsInput
    upsert?: TagUpsertWithoutPlanTagsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutPlanTagsInput, TagUpdateWithoutPlanTagsInput>, TagUncheckedUpdateWithoutPlanTagsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPlanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusFilter<$PrismaModel> | $Enums.PlanStatus
  }

  export type NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanStatusFilter<$PrismaModel>
    _max?: NestedEnumPlanStatusFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusFilter<$PrismaModel> | $Enums.ItemStatus
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemStatusFilter<$PrismaModel>
    _max?: NestedEnumItemStatusFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type TaskCreateWithoutUserInput = {
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taskTags?: TaskTagCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taskTags?: TaskTagUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutUserInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskCreateManyUserInputEnvelope = {
    data: TaskCreateManyUserInput | TaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StudyPlanCreateWithoutUserInput = {
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    studyItems?: StudyItemCreateNestedManyWithoutStudyPlanInput
    planTags?: PlanTagCreateNestedManyWithoutStudyPlanInput
  }

  export type StudyPlanUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    studyItems?: StudyItemUncheckedCreateNestedManyWithoutStudyPlanInput
    planTags?: PlanTagUncheckedCreateNestedManyWithoutStudyPlanInput
  }

  export type StudyPlanCreateOrConnectWithoutUserInput = {
    where: StudyPlanWhereUniqueInput
    create: XOR<StudyPlanCreateWithoutUserInput, StudyPlanUncheckedCreateWithoutUserInput>
  }

  export type StudyPlanCreateManyUserInputEnvelope = {
    data: StudyPlanCreateManyUserInput | StudyPlanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TagCreateWithoutUserInput = {
    name: string
    color?: string
    createdAt?: Date | string
    taskTags?: TaskTagCreateNestedManyWithoutTagInput
    planTags?: PlanTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    color?: string
    createdAt?: Date | string
    taskTags?: TaskTagUncheckedCreateNestedManyWithoutTagInput
    planTags?: PlanTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutUserInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput>
  }

  export type TagCreateManyUserInputEnvelope = {
    data: TagCreateManyUserInput | TagCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VerificationCodeCreateWithoutUserInput = {
    email: string
    code: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type VerificationCodeUncheckedCreateWithoutUserInput = {
    id?: number
    email: string
    code: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type VerificationCodeCreateOrConnectWithoutUserInput = {
    where: VerificationCodeWhereUniqueInput
    create: XOR<VerificationCodeCreateWithoutUserInput, VerificationCodeUncheckedCreateWithoutUserInput>
  }

  export type VerificationCodeCreateManyUserInputEnvelope = {
    data: VerificationCodeCreateManyUserInput | VerificationCodeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
  }

  export type TaskUpdateManyWithWhereWithoutUserInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: IntFilter<"Task"> | number
    userId?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type StudyPlanUpsertWithWhereUniqueWithoutUserInput = {
    where: StudyPlanWhereUniqueInput
    update: XOR<StudyPlanUpdateWithoutUserInput, StudyPlanUncheckedUpdateWithoutUserInput>
    create: XOR<StudyPlanCreateWithoutUserInput, StudyPlanUncheckedCreateWithoutUserInput>
  }

  export type StudyPlanUpdateWithWhereUniqueWithoutUserInput = {
    where: StudyPlanWhereUniqueInput
    data: XOR<StudyPlanUpdateWithoutUserInput, StudyPlanUncheckedUpdateWithoutUserInput>
  }

  export type StudyPlanUpdateManyWithWhereWithoutUserInput = {
    where: StudyPlanScalarWhereInput
    data: XOR<StudyPlanUpdateManyMutationInput, StudyPlanUncheckedUpdateManyWithoutUserInput>
  }

  export type StudyPlanScalarWhereInput = {
    AND?: StudyPlanScalarWhereInput | StudyPlanScalarWhereInput[]
    OR?: StudyPlanScalarWhereInput[]
    NOT?: StudyPlanScalarWhereInput | StudyPlanScalarWhereInput[]
    id?: IntFilter<"StudyPlan"> | number
    userId?: IntFilter<"StudyPlan"> | number
    title?: StringFilter<"StudyPlan"> | string
    description?: StringNullableFilter<"StudyPlan"> | string | null
    startDate?: DateTimeFilter<"StudyPlan"> | Date | string
    endDate?: DateTimeNullableFilter<"StudyPlan"> | Date | string | null
    status?: EnumPlanStatusFilter<"StudyPlan"> | $Enums.PlanStatus
    createdAt?: DateTimeFilter<"StudyPlan"> | Date | string
    updatedAt?: DateTimeFilter<"StudyPlan"> | Date | string
  }

  export type TagUpsertWithWhereUniqueWithoutUserInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutUserInput, TagUncheckedUpdateWithoutUserInput>
    create: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput>
  }

  export type TagUpdateWithWhereUniqueWithoutUserInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutUserInput, TagUncheckedUpdateWithoutUserInput>
  }

  export type TagUpdateManyWithWhereWithoutUserInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutUserInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: IntFilter<"Tag"> | number
    userId?: IntFilter<"Tag"> | number
    name?: StringFilter<"Tag"> | string
    color?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
  }

  export type VerificationCodeUpsertWithWhereUniqueWithoutUserInput = {
    where: VerificationCodeWhereUniqueInput
    update: XOR<VerificationCodeUpdateWithoutUserInput, VerificationCodeUncheckedUpdateWithoutUserInput>
    create: XOR<VerificationCodeCreateWithoutUserInput, VerificationCodeUncheckedCreateWithoutUserInput>
  }

  export type VerificationCodeUpdateWithWhereUniqueWithoutUserInput = {
    where: VerificationCodeWhereUniqueInput
    data: XOR<VerificationCodeUpdateWithoutUserInput, VerificationCodeUncheckedUpdateWithoutUserInput>
  }

  export type VerificationCodeUpdateManyWithWhereWithoutUserInput = {
    where: VerificationCodeScalarWhereInput
    data: XOR<VerificationCodeUpdateManyMutationInput, VerificationCodeUncheckedUpdateManyWithoutUserInput>
  }

  export type VerificationCodeScalarWhereInput = {
    AND?: VerificationCodeScalarWhereInput | VerificationCodeScalarWhereInput[]
    OR?: VerificationCodeScalarWhereInput[]
    NOT?: VerificationCodeScalarWhereInput | VerificationCodeScalarWhereInput[]
    id?: IntFilter<"VerificationCode"> | number
    email?: StringFilter<"VerificationCode"> | string
    code?: StringFilter<"VerificationCode"> | string
    expiresAt?: DateTimeFilter<"VerificationCode"> | Date | string
    createdAt?: DateTimeFilter<"VerificationCode"> | Date | string
    userId?: IntNullableFilter<"VerificationCode"> | number | null
  }

  export type UserCreateWithoutVerificationCodesInput = {
    username: string
    email: string
    password: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanCreateNestedManyWithoutUserInput
    tags?: TagCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVerificationCodesInput = {
    id?: number
    username: string
    email: string
    password: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanUncheckedCreateNestedManyWithoutUserInput
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVerificationCodesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerificationCodesInput, UserUncheckedCreateWithoutVerificationCodesInput>
  }

  export type UserUpsertWithoutVerificationCodesInput = {
    update: XOR<UserUpdateWithoutVerificationCodesInput, UserUncheckedUpdateWithoutVerificationCodesInput>
    create: XOR<UserCreateWithoutVerificationCodesInput, UserUncheckedCreateWithoutVerificationCodesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerificationCodesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerificationCodesInput, UserUncheckedUpdateWithoutVerificationCodesInput>
  }

  export type UserUpdateWithoutVerificationCodesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUpdateManyWithoutUserNestedInput
    tags?: TagUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVerificationCodesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUncheckedUpdateManyWithoutUserNestedInput
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTasksInput = {
    username: string
    email: string
    password: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    studyPlans?: StudyPlanCreateNestedManyWithoutUserInput
    tags?: TagCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTasksInput = {
    id?: number
    username: string
    email: string
    password: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    studyPlans?: StudyPlanUncheckedCreateNestedManyWithoutUserInput
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
  }

  export type TaskTagCreateWithoutTaskInput = {
    tag: TagCreateNestedOneWithoutTaskTagsInput
  }

  export type TaskTagUncheckedCreateWithoutTaskInput = {
    tagId: number
  }

  export type TaskTagCreateOrConnectWithoutTaskInput = {
    where: TaskTagWhereUniqueInput
    create: XOR<TaskTagCreateWithoutTaskInput, TaskTagUncheckedCreateWithoutTaskInput>
  }

  export type TaskTagCreateManyTaskInputEnvelope = {
    data: TaskTagCreateManyTaskInput | TaskTagCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTasksInput = {
    update: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateWithoutTasksInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyPlans?: StudyPlanUpdateManyWithoutUserNestedInput
    tags?: TagUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyPlans?: StudyPlanUncheckedUpdateManyWithoutUserNestedInput
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskTagUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskTagWhereUniqueInput
    update: XOR<TaskTagUpdateWithoutTaskInput, TaskTagUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskTagCreateWithoutTaskInput, TaskTagUncheckedCreateWithoutTaskInput>
  }

  export type TaskTagUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskTagWhereUniqueInput
    data: XOR<TaskTagUpdateWithoutTaskInput, TaskTagUncheckedUpdateWithoutTaskInput>
  }

  export type TaskTagUpdateManyWithWhereWithoutTaskInput = {
    where: TaskTagScalarWhereInput
    data: XOR<TaskTagUpdateManyMutationInput, TaskTagUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskTagScalarWhereInput = {
    AND?: TaskTagScalarWhereInput | TaskTagScalarWhereInput[]
    OR?: TaskTagScalarWhereInput[]
    NOT?: TaskTagScalarWhereInput | TaskTagScalarWhereInput[]
    taskId?: IntFilter<"TaskTag"> | number
    tagId?: IntFilter<"TaskTag"> | number
  }

  export type UserCreateWithoutStudyPlansInput = {
    username: string
    email: string
    password: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutUserInput
    tags?: TagCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudyPlansInput = {
    id?: number
    username: string
    email: string
    password: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudyPlansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudyPlansInput, UserUncheckedCreateWithoutStudyPlansInput>
  }

  export type StudyItemCreateWithoutStudyPlanInput = {
    title: string
    description?: string | null
    estimatedHours?: Decimal | DecimalJsLike | number | string | null
    actualHours?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.ItemStatus
    completionPercentage?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    studyLogs?: StudyLogCreateNestedManyWithoutStudyItemInput
  }

  export type StudyItemUncheckedCreateWithoutStudyPlanInput = {
    id?: number
    title: string
    description?: string | null
    estimatedHours?: Decimal | DecimalJsLike | number | string | null
    actualHours?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.ItemStatus
    completionPercentage?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    studyLogs?: StudyLogUncheckedCreateNestedManyWithoutStudyItemInput
  }

  export type StudyItemCreateOrConnectWithoutStudyPlanInput = {
    where: StudyItemWhereUniqueInput
    create: XOR<StudyItemCreateWithoutStudyPlanInput, StudyItemUncheckedCreateWithoutStudyPlanInput>
  }

  export type StudyItemCreateManyStudyPlanInputEnvelope = {
    data: StudyItemCreateManyStudyPlanInput | StudyItemCreateManyStudyPlanInput[]
    skipDuplicates?: boolean
  }

  export type PlanTagCreateWithoutStudyPlanInput = {
    tag: TagCreateNestedOneWithoutPlanTagsInput
  }

  export type PlanTagUncheckedCreateWithoutStudyPlanInput = {
    tagId: number
  }

  export type PlanTagCreateOrConnectWithoutStudyPlanInput = {
    where: PlanTagWhereUniqueInput
    create: XOR<PlanTagCreateWithoutStudyPlanInput, PlanTagUncheckedCreateWithoutStudyPlanInput>
  }

  export type PlanTagCreateManyStudyPlanInputEnvelope = {
    data: PlanTagCreateManyStudyPlanInput | PlanTagCreateManyStudyPlanInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStudyPlansInput = {
    update: XOR<UserUpdateWithoutStudyPlansInput, UserUncheckedUpdateWithoutStudyPlansInput>
    create: XOR<UserCreateWithoutStudyPlansInput, UserUncheckedCreateWithoutStudyPlansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudyPlansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudyPlansInput, UserUncheckedUpdateWithoutStudyPlansInput>
  }

  export type UserUpdateWithoutStudyPlansInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutUserNestedInput
    tags?: TagUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudyPlansInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StudyItemUpsertWithWhereUniqueWithoutStudyPlanInput = {
    where: StudyItemWhereUniqueInput
    update: XOR<StudyItemUpdateWithoutStudyPlanInput, StudyItemUncheckedUpdateWithoutStudyPlanInput>
    create: XOR<StudyItemCreateWithoutStudyPlanInput, StudyItemUncheckedCreateWithoutStudyPlanInput>
  }

  export type StudyItemUpdateWithWhereUniqueWithoutStudyPlanInput = {
    where: StudyItemWhereUniqueInput
    data: XOR<StudyItemUpdateWithoutStudyPlanInput, StudyItemUncheckedUpdateWithoutStudyPlanInput>
  }

  export type StudyItemUpdateManyWithWhereWithoutStudyPlanInput = {
    where: StudyItemScalarWhereInput
    data: XOR<StudyItemUpdateManyMutationInput, StudyItemUncheckedUpdateManyWithoutStudyPlanInput>
  }

  export type StudyItemScalarWhereInput = {
    AND?: StudyItemScalarWhereInput | StudyItemScalarWhereInput[]
    OR?: StudyItemScalarWhereInput[]
    NOT?: StudyItemScalarWhereInput | StudyItemScalarWhereInput[]
    id?: IntFilter<"StudyItem"> | number
    planId?: IntFilter<"StudyItem"> | number
    title?: StringFilter<"StudyItem"> | string
    description?: StringNullableFilter<"StudyItem"> | string | null
    estimatedHours?: DecimalNullableFilter<"StudyItem"> | Decimal | DecimalJsLike | number | string | null
    actualHours?: DecimalNullableFilter<"StudyItem"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumItemStatusFilter<"StudyItem"> | $Enums.ItemStatus
    completionPercentage?: IntFilter<"StudyItem"> | number
    createdAt?: DateTimeFilter<"StudyItem"> | Date | string
    updatedAt?: DateTimeFilter<"StudyItem"> | Date | string
  }

  export type PlanTagUpsertWithWhereUniqueWithoutStudyPlanInput = {
    where: PlanTagWhereUniqueInput
    update: XOR<PlanTagUpdateWithoutStudyPlanInput, PlanTagUncheckedUpdateWithoutStudyPlanInput>
    create: XOR<PlanTagCreateWithoutStudyPlanInput, PlanTagUncheckedCreateWithoutStudyPlanInput>
  }

  export type PlanTagUpdateWithWhereUniqueWithoutStudyPlanInput = {
    where: PlanTagWhereUniqueInput
    data: XOR<PlanTagUpdateWithoutStudyPlanInput, PlanTagUncheckedUpdateWithoutStudyPlanInput>
  }

  export type PlanTagUpdateManyWithWhereWithoutStudyPlanInput = {
    where: PlanTagScalarWhereInput
    data: XOR<PlanTagUpdateManyMutationInput, PlanTagUncheckedUpdateManyWithoutStudyPlanInput>
  }

  export type PlanTagScalarWhereInput = {
    AND?: PlanTagScalarWhereInput | PlanTagScalarWhereInput[]
    OR?: PlanTagScalarWhereInput[]
    NOT?: PlanTagScalarWhereInput | PlanTagScalarWhereInput[]
    planId?: IntFilter<"PlanTag"> | number
    tagId?: IntFilter<"PlanTag"> | number
  }

  export type StudyPlanCreateWithoutStudyItemsInput = {
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStudyPlansInput
    planTags?: PlanTagCreateNestedManyWithoutStudyPlanInput
  }

  export type StudyPlanUncheckedCreateWithoutStudyItemsInput = {
    id?: number
    userId: number
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    planTags?: PlanTagUncheckedCreateNestedManyWithoutStudyPlanInput
  }

  export type StudyPlanCreateOrConnectWithoutStudyItemsInput = {
    where: StudyPlanWhereUniqueInput
    create: XOR<StudyPlanCreateWithoutStudyItemsInput, StudyPlanUncheckedCreateWithoutStudyItemsInput>
  }

  export type StudyLogCreateWithoutStudyItemInput = {
    studyDate: Date | string
    hoursSpent: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type StudyLogUncheckedCreateWithoutStudyItemInput = {
    id?: number
    studyDate: Date | string
    hoursSpent: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type StudyLogCreateOrConnectWithoutStudyItemInput = {
    where: StudyLogWhereUniqueInput
    create: XOR<StudyLogCreateWithoutStudyItemInput, StudyLogUncheckedCreateWithoutStudyItemInput>
  }

  export type StudyLogCreateManyStudyItemInputEnvelope = {
    data: StudyLogCreateManyStudyItemInput | StudyLogCreateManyStudyItemInput[]
    skipDuplicates?: boolean
  }

  export type StudyPlanUpsertWithoutStudyItemsInput = {
    update: XOR<StudyPlanUpdateWithoutStudyItemsInput, StudyPlanUncheckedUpdateWithoutStudyItemsInput>
    create: XOR<StudyPlanCreateWithoutStudyItemsInput, StudyPlanUncheckedCreateWithoutStudyItemsInput>
    where?: StudyPlanWhereInput
  }

  export type StudyPlanUpdateToOneWithWhereWithoutStudyItemsInput = {
    where?: StudyPlanWhereInput
    data: XOR<StudyPlanUpdateWithoutStudyItemsInput, StudyPlanUncheckedUpdateWithoutStudyItemsInput>
  }

  export type StudyPlanUpdateWithoutStudyItemsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudyPlansNestedInput
    planTags?: PlanTagUpdateManyWithoutStudyPlanNestedInput
  }

  export type StudyPlanUncheckedUpdateWithoutStudyItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planTags?: PlanTagUncheckedUpdateManyWithoutStudyPlanNestedInput
  }

  export type StudyLogUpsertWithWhereUniqueWithoutStudyItemInput = {
    where: StudyLogWhereUniqueInput
    update: XOR<StudyLogUpdateWithoutStudyItemInput, StudyLogUncheckedUpdateWithoutStudyItemInput>
    create: XOR<StudyLogCreateWithoutStudyItemInput, StudyLogUncheckedCreateWithoutStudyItemInput>
  }

  export type StudyLogUpdateWithWhereUniqueWithoutStudyItemInput = {
    where: StudyLogWhereUniqueInput
    data: XOR<StudyLogUpdateWithoutStudyItemInput, StudyLogUncheckedUpdateWithoutStudyItemInput>
  }

  export type StudyLogUpdateManyWithWhereWithoutStudyItemInput = {
    where: StudyLogScalarWhereInput
    data: XOR<StudyLogUpdateManyMutationInput, StudyLogUncheckedUpdateManyWithoutStudyItemInput>
  }

  export type StudyLogScalarWhereInput = {
    AND?: StudyLogScalarWhereInput | StudyLogScalarWhereInput[]
    OR?: StudyLogScalarWhereInput[]
    NOT?: StudyLogScalarWhereInput | StudyLogScalarWhereInput[]
    id?: IntFilter<"StudyLog"> | number
    itemId?: IntFilter<"StudyLog"> | number
    studyDate?: DateTimeFilter<"StudyLog"> | Date | string
    hoursSpent?: DecimalFilter<"StudyLog"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"StudyLog"> | string | null
    createdAt?: DateTimeFilter<"StudyLog"> | Date | string
  }

  export type StudyItemCreateWithoutStudyLogsInput = {
    title: string
    description?: string | null
    estimatedHours?: Decimal | DecimalJsLike | number | string | null
    actualHours?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.ItemStatus
    completionPercentage?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    studyPlan: StudyPlanCreateNestedOneWithoutStudyItemsInput
  }

  export type StudyItemUncheckedCreateWithoutStudyLogsInput = {
    id?: number
    planId: number
    title: string
    description?: string | null
    estimatedHours?: Decimal | DecimalJsLike | number | string | null
    actualHours?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.ItemStatus
    completionPercentage?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudyItemCreateOrConnectWithoutStudyLogsInput = {
    where: StudyItemWhereUniqueInput
    create: XOR<StudyItemCreateWithoutStudyLogsInput, StudyItemUncheckedCreateWithoutStudyLogsInput>
  }

  export type StudyItemUpsertWithoutStudyLogsInput = {
    update: XOR<StudyItemUpdateWithoutStudyLogsInput, StudyItemUncheckedUpdateWithoutStudyLogsInput>
    create: XOR<StudyItemCreateWithoutStudyLogsInput, StudyItemUncheckedCreateWithoutStudyLogsInput>
    where?: StudyItemWhereInput
  }

  export type StudyItemUpdateToOneWithWhereWithoutStudyLogsInput = {
    where?: StudyItemWhereInput
    data: XOR<StudyItemUpdateWithoutStudyLogsInput, StudyItemUncheckedUpdateWithoutStudyLogsInput>
  }

  export type StudyItemUpdateWithoutStudyLogsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    completionPercentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyPlan?: StudyPlanUpdateOneRequiredWithoutStudyItemsNestedInput
  }

  export type StudyItemUncheckedUpdateWithoutStudyLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    planId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    completionPercentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutTagsInput = {
    username: string
    email: string
    password: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTagsInput = {
    id?: number
    username: string
    email: string
    password: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanUncheckedCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTagsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
  }

  export type TaskTagCreateWithoutTagInput = {
    task: TaskCreateNestedOneWithoutTaskTagsInput
  }

  export type TaskTagUncheckedCreateWithoutTagInput = {
    taskId: number
  }

  export type TaskTagCreateOrConnectWithoutTagInput = {
    where: TaskTagWhereUniqueInput
    create: XOR<TaskTagCreateWithoutTagInput, TaskTagUncheckedCreateWithoutTagInput>
  }

  export type TaskTagCreateManyTagInputEnvelope = {
    data: TaskTagCreateManyTagInput | TaskTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type PlanTagCreateWithoutTagInput = {
    studyPlan: StudyPlanCreateNestedOneWithoutPlanTagsInput
  }

  export type PlanTagUncheckedCreateWithoutTagInput = {
    planId: number
  }

  export type PlanTagCreateOrConnectWithoutTagInput = {
    where: PlanTagWhereUniqueInput
    create: XOR<PlanTagCreateWithoutTagInput, PlanTagUncheckedCreateWithoutTagInput>
  }

  export type PlanTagCreateManyTagInputEnvelope = {
    data: PlanTagCreateManyTagInput | PlanTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTagsInput = {
    update: XOR<UserUpdateWithoutTagsInput, UserUncheckedUpdateWithoutTagsInput>
    create: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTagsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTagsInput, UserUncheckedUpdateWithoutTagsInput>
  }

  export type UserUpdateWithoutTagsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUncheckedUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskTagUpsertWithWhereUniqueWithoutTagInput = {
    where: TaskTagWhereUniqueInput
    update: XOR<TaskTagUpdateWithoutTagInput, TaskTagUncheckedUpdateWithoutTagInput>
    create: XOR<TaskTagCreateWithoutTagInput, TaskTagUncheckedCreateWithoutTagInput>
  }

  export type TaskTagUpdateWithWhereUniqueWithoutTagInput = {
    where: TaskTagWhereUniqueInput
    data: XOR<TaskTagUpdateWithoutTagInput, TaskTagUncheckedUpdateWithoutTagInput>
  }

  export type TaskTagUpdateManyWithWhereWithoutTagInput = {
    where: TaskTagScalarWhereInput
    data: XOR<TaskTagUpdateManyMutationInput, TaskTagUncheckedUpdateManyWithoutTagInput>
  }

  export type PlanTagUpsertWithWhereUniqueWithoutTagInput = {
    where: PlanTagWhereUniqueInput
    update: XOR<PlanTagUpdateWithoutTagInput, PlanTagUncheckedUpdateWithoutTagInput>
    create: XOR<PlanTagCreateWithoutTagInput, PlanTagUncheckedCreateWithoutTagInput>
  }

  export type PlanTagUpdateWithWhereUniqueWithoutTagInput = {
    where: PlanTagWhereUniqueInput
    data: XOR<PlanTagUpdateWithoutTagInput, PlanTagUncheckedUpdateWithoutTagInput>
  }

  export type PlanTagUpdateManyWithWhereWithoutTagInput = {
    where: PlanTagScalarWhereInput
    data: XOR<PlanTagUpdateManyMutationInput, PlanTagUncheckedUpdateManyWithoutTagInput>
  }

  export type TaskCreateWithoutTaskTagsInput = {
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutTaskTagsInput = {
    id?: number
    userId: number
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutTaskTagsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutTaskTagsInput, TaskUncheckedCreateWithoutTaskTagsInput>
  }

  export type TagCreateWithoutTaskTagsInput = {
    name: string
    color?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTagsInput
    planTags?: PlanTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutTaskTagsInput = {
    id?: number
    userId: number
    name: string
    color?: string
    createdAt?: Date | string
    planTags?: PlanTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutTaskTagsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutTaskTagsInput, TagUncheckedCreateWithoutTaskTagsInput>
  }

  export type TaskUpsertWithoutTaskTagsInput = {
    update: XOR<TaskUpdateWithoutTaskTagsInput, TaskUncheckedUpdateWithoutTaskTagsInput>
    create: XOR<TaskCreateWithoutTaskTagsInput, TaskUncheckedCreateWithoutTaskTagsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutTaskTagsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutTaskTagsInput, TaskUncheckedUpdateWithoutTaskTagsInput>
  }

  export type TaskUpdateWithoutTaskTagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutTaskTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUpsertWithoutTaskTagsInput = {
    update: XOR<TagUpdateWithoutTaskTagsInput, TagUncheckedUpdateWithoutTaskTagsInput>
    create: XOR<TagCreateWithoutTaskTagsInput, TagUncheckedCreateWithoutTaskTagsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutTaskTagsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutTaskTagsInput, TagUncheckedUpdateWithoutTaskTagsInput>
  }

  export type TagUpdateWithoutTaskTagsInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTagsNestedInput
    planTags?: PlanTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutTaskTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planTags?: PlanTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type StudyPlanCreateWithoutPlanTagsInput = {
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStudyPlansInput
    studyItems?: StudyItemCreateNestedManyWithoutStudyPlanInput
  }

  export type StudyPlanUncheckedCreateWithoutPlanTagsInput = {
    id?: number
    userId: number
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    studyItems?: StudyItemUncheckedCreateNestedManyWithoutStudyPlanInput
  }

  export type StudyPlanCreateOrConnectWithoutPlanTagsInput = {
    where: StudyPlanWhereUniqueInput
    create: XOR<StudyPlanCreateWithoutPlanTagsInput, StudyPlanUncheckedCreateWithoutPlanTagsInput>
  }

  export type TagCreateWithoutPlanTagsInput = {
    name: string
    color?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTagsInput
    taskTags?: TaskTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutPlanTagsInput = {
    id?: number
    userId: number
    name: string
    color?: string
    createdAt?: Date | string
    taskTags?: TaskTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutPlanTagsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutPlanTagsInput, TagUncheckedCreateWithoutPlanTagsInput>
  }

  export type StudyPlanUpsertWithoutPlanTagsInput = {
    update: XOR<StudyPlanUpdateWithoutPlanTagsInput, StudyPlanUncheckedUpdateWithoutPlanTagsInput>
    create: XOR<StudyPlanCreateWithoutPlanTagsInput, StudyPlanUncheckedCreateWithoutPlanTagsInput>
    where?: StudyPlanWhereInput
  }

  export type StudyPlanUpdateToOneWithWhereWithoutPlanTagsInput = {
    where?: StudyPlanWhereInput
    data: XOR<StudyPlanUpdateWithoutPlanTagsInput, StudyPlanUncheckedUpdateWithoutPlanTagsInput>
  }

  export type StudyPlanUpdateWithoutPlanTagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudyPlansNestedInput
    studyItems?: StudyItemUpdateManyWithoutStudyPlanNestedInput
  }

  export type StudyPlanUncheckedUpdateWithoutPlanTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyItems?: StudyItemUncheckedUpdateManyWithoutStudyPlanNestedInput
  }

  export type TagUpsertWithoutPlanTagsInput = {
    update: XOR<TagUpdateWithoutPlanTagsInput, TagUncheckedUpdateWithoutPlanTagsInput>
    create: XOR<TagCreateWithoutPlanTagsInput, TagUncheckedCreateWithoutPlanTagsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutPlanTagsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutPlanTagsInput, TagUncheckedUpdateWithoutPlanTagsInput>
  }

  export type TagUpdateWithoutPlanTagsInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTagsNestedInput
    taskTags?: TaskTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutPlanTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskTags?: TaskTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TaskCreateManyUserInput = {
    id?: number
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudyPlanCreateManyUserInput = {
    id?: number
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagCreateManyUserInput = {
    id?: number
    name: string
    color?: string
    createdAt?: Date | string
  }

  export type VerificationCodeCreateManyUserInput = {
    id?: number
    email: string
    code: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type TaskUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskTags?: TaskTagUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskTags?: TaskTagUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyPlanUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyItems?: StudyItemUpdateManyWithoutStudyPlanNestedInput
    planTags?: PlanTagUpdateManyWithoutStudyPlanNestedInput
  }

  export type StudyPlanUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyItems?: StudyItemUncheckedUpdateManyWithoutStudyPlanNestedInput
    planTags?: PlanTagUncheckedUpdateManyWithoutStudyPlanNestedInput
  }

  export type StudyPlanUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskTags?: TaskTagUpdateManyWithoutTagNestedInput
    planTags?: PlanTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskTags?: TaskTagUncheckedUpdateManyWithoutTagNestedInput
    planTags?: PlanTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskTagCreateManyTaskInput = {
    tagId: number
  }

  export type TaskTagUpdateWithoutTaskInput = {
    tag?: TagUpdateOneRequiredWithoutTaskTagsNestedInput
  }

  export type TaskTagUncheckedUpdateWithoutTaskInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskTagUncheckedUpdateManyWithoutTaskInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type StudyItemCreateManyStudyPlanInput = {
    id?: number
    title: string
    description?: string | null
    estimatedHours?: Decimal | DecimalJsLike | number | string | null
    actualHours?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.ItemStatus
    completionPercentage?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanTagCreateManyStudyPlanInput = {
    tagId: number
  }

  export type StudyItemUpdateWithoutStudyPlanInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    completionPercentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyLogs?: StudyLogUpdateManyWithoutStudyItemNestedInput
  }

  export type StudyItemUncheckedUpdateWithoutStudyPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    completionPercentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyLogs?: StudyLogUncheckedUpdateManyWithoutStudyItemNestedInput
  }

  export type StudyItemUncheckedUpdateManyWithoutStudyPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    completionPercentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanTagUpdateWithoutStudyPlanInput = {
    tag?: TagUpdateOneRequiredWithoutPlanTagsNestedInput
  }

  export type PlanTagUncheckedUpdateWithoutStudyPlanInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type PlanTagUncheckedUpdateManyWithoutStudyPlanInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type StudyLogCreateManyStudyItemInput = {
    id?: number
    studyDate: Date | string
    hoursSpent: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type StudyLogUpdateWithoutStudyItemInput = {
    studyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyLogUncheckedUpdateWithoutStudyItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    studyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyLogUncheckedUpdateManyWithoutStudyItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    studyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskTagCreateManyTagInput = {
    taskId: number
  }

  export type PlanTagCreateManyTagInput = {
    planId: number
  }

  export type TaskTagUpdateWithoutTagInput = {
    task?: TaskUpdateOneRequiredWithoutTaskTagsNestedInput
  }

  export type TaskTagUncheckedUpdateWithoutTagInput = {
    taskId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskTagUncheckedUpdateManyWithoutTagInput = {
    taskId?: IntFieldUpdateOperationsInput | number
  }

  export type PlanTagUpdateWithoutTagInput = {
    studyPlan?: StudyPlanUpdateOneRequiredWithoutPlanTagsNestedInput
  }

  export type PlanTagUncheckedUpdateWithoutTagInput = {
    planId?: IntFieldUpdateOperationsInput | number
  }

  export type PlanTagUncheckedUpdateManyWithoutTagInput = {
    planId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}