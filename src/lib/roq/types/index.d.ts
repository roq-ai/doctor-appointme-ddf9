/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model clinic
 *
 */
export type clinic = $Result.DefaultSelection<Prisma.$clinicPayload>;
/**
 * Model healthcare_provider
 *
 */
export type healthcare_provider = $Result.DefaultSelection<Prisma.$healthcare_providerPayload>;
/**
 * Model insurance_provider
 *
 */
export type insurance_provider = $Result.DefaultSelection<Prisma.$insurance_providerPayload>;
/**
 * Model medical_staff
 *
 */
export type medical_staff = $Result.DefaultSelection<Prisma.$medical_staffPayload>;
/**
 * Model patient
 *
 */
export type patient = $Result.DefaultSelection<Prisma.$patientPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clinics
 * const clinics = await prisma.clinic.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clinics
   * const clinics = await prisma.clinic.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

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
  $use(cb: Prisma.Middleware): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.clinic`: Exposes CRUD operations for the **clinic** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Clinics
   * const clinics = await prisma.clinic.findMany()
   * ```
   */
  get clinic(): Prisma.clinicDelegate<ExtArgs>;

  /**
   * `prisma.healthcare_provider`: Exposes CRUD operations for the **healthcare_provider** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Healthcare_providers
   * const healthcare_providers = await prisma.healthcare_provider.findMany()
   * ```
   */
  get healthcare_provider(): Prisma.healthcare_providerDelegate<ExtArgs>;

  /**
   * `prisma.insurance_provider`: Exposes CRUD operations for the **insurance_provider** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Insurance_providers
   * const insurance_providers = await prisma.insurance_provider.findMany()
   * ```
   */
  get insurance_provider(): Prisma.insurance_providerDelegate<ExtArgs>;

  /**
   * `prisma.medical_staff`: Exposes CRUD operations for the **medical_staff** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Medical_staffs
   * const medical_staffs = await prisma.medical_staff.findMany()
   * ```
   */
  get medical_staff(): Prisma.medical_staffDelegate<ExtArgs>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **patient** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Patients
   * const patients = await prisma.patient.findMany()
   * ```
   */
  get patient(): Prisma.patientDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    clinic: 'clinic';
    healthcare_provider: 'healthcare_provider';
    insurance_provider: 'insurance_provider';
    medical_staff: 'medical_staff';
    patient: 'patient';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'clinic' | 'healthcare_provider' | 'insurance_provider' | 'medical_staff' | 'patient' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      clinic: {
        payload: Prisma.$clinicPayload<ExtArgs>;
        fields: Prisma.clinicFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.clinicFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.clinicFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>;
          };
          findFirst: {
            args: Prisma.clinicFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.clinicFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>;
          };
          findMany: {
            args: Prisma.clinicFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>[];
          };
          create: {
            args: Prisma.clinicCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>;
          };
          createMany: {
            args: Prisma.clinicCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.clinicDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>;
          };
          update: {
            args: Prisma.clinicUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>;
          };
          deleteMany: {
            args: Prisma.clinicDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.clinicUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.clinicUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>;
          };
          aggregate: {
            args: Prisma.ClinicAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateClinic>;
          };
          groupBy: {
            args: Prisma.clinicGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ClinicGroupByOutputType>[];
          };
          count: {
            args: Prisma.clinicCountArgs<ExtArgs>;
            result: $Utils.Optional<ClinicCountAggregateOutputType> | number;
          };
        };
      };
      healthcare_provider: {
        payload: Prisma.$healthcare_providerPayload<ExtArgs>;
        fields: Prisma.healthcare_providerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.healthcare_providerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$healthcare_providerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.healthcare_providerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$healthcare_providerPayload>;
          };
          findFirst: {
            args: Prisma.healthcare_providerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$healthcare_providerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.healthcare_providerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$healthcare_providerPayload>;
          };
          findMany: {
            args: Prisma.healthcare_providerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$healthcare_providerPayload>[];
          };
          create: {
            args: Prisma.healthcare_providerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$healthcare_providerPayload>;
          };
          createMany: {
            args: Prisma.healthcare_providerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.healthcare_providerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$healthcare_providerPayload>;
          };
          update: {
            args: Prisma.healthcare_providerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$healthcare_providerPayload>;
          };
          deleteMany: {
            args: Prisma.healthcare_providerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.healthcare_providerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.healthcare_providerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$healthcare_providerPayload>;
          };
          aggregate: {
            args: Prisma.Healthcare_providerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateHealthcare_provider>;
          };
          groupBy: {
            args: Prisma.healthcare_providerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Healthcare_providerGroupByOutputType>[];
          };
          count: {
            args: Prisma.healthcare_providerCountArgs<ExtArgs>;
            result: $Utils.Optional<Healthcare_providerCountAggregateOutputType> | number;
          };
        };
      };
      insurance_provider: {
        payload: Prisma.$insurance_providerPayload<ExtArgs>;
        fields: Prisma.insurance_providerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.insurance_providerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.insurance_providerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload>;
          };
          findFirst: {
            args: Prisma.insurance_providerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.insurance_providerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload>;
          };
          findMany: {
            args: Prisma.insurance_providerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload>[];
          };
          create: {
            args: Prisma.insurance_providerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload>;
          };
          createMany: {
            args: Prisma.insurance_providerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.insurance_providerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload>;
          };
          update: {
            args: Prisma.insurance_providerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload>;
          };
          deleteMany: {
            args: Prisma.insurance_providerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.insurance_providerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.insurance_providerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload>;
          };
          aggregate: {
            args: Prisma.Insurance_providerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInsurance_provider>;
          };
          groupBy: {
            args: Prisma.insurance_providerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Insurance_providerGroupByOutputType>[];
          };
          count: {
            args: Prisma.insurance_providerCountArgs<ExtArgs>;
            result: $Utils.Optional<Insurance_providerCountAggregateOutputType> | number;
          };
        };
      };
      medical_staff: {
        payload: Prisma.$medical_staffPayload<ExtArgs>;
        fields: Prisma.medical_staffFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.medical_staffFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_staffPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.medical_staffFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_staffPayload>;
          };
          findFirst: {
            args: Prisma.medical_staffFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_staffPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.medical_staffFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_staffPayload>;
          };
          findMany: {
            args: Prisma.medical_staffFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_staffPayload>[];
          };
          create: {
            args: Prisma.medical_staffCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_staffPayload>;
          };
          createMany: {
            args: Prisma.medical_staffCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.medical_staffDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_staffPayload>;
          };
          update: {
            args: Prisma.medical_staffUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_staffPayload>;
          };
          deleteMany: {
            args: Prisma.medical_staffDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.medical_staffUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.medical_staffUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_staffPayload>;
          };
          aggregate: {
            args: Prisma.Medical_staffAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMedical_staff>;
          };
          groupBy: {
            args: Prisma.medical_staffGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Medical_staffGroupByOutputType>[];
          };
          count: {
            args: Prisma.medical_staffCountArgs<ExtArgs>;
            result: $Utils.Optional<Medical_staffCountAggregateOutputType> | number;
          };
        };
      };
      patient: {
        payload: Prisma.$patientPayload<ExtArgs>;
        fields: Prisma.patientFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.patientFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.patientFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload>;
          };
          findFirst: {
            args: Prisma.patientFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.patientFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload>;
          };
          findMany: {
            args: Prisma.patientFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload>[];
          };
          create: {
            args: Prisma.patientCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload>;
          };
          createMany: {
            args: Prisma.patientCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.patientDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload>;
          };
          update: {
            args: Prisma.patientUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload>;
          };
          deleteMany: {
            args: Prisma.patientDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.patientUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.patientUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload>;
          };
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePatient>;
          };
          groupBy: {
            args: Prisma.patientGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PatientGroupByOutputType>[];
          };
          count: {
            args: Prisma.patientCountArgs<ExtArgs>;
            result: $Utils.Optional<PatientCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type ClinicCountOutputType
   */

  export type ClinicCountOutputType = {
    medical_staff: number;
  };

  export type ClinicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medical_staff?: boolean | ClinicCountOutputTypeCountMedical_staffArgs;
  };

  // Custom InputTypes

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicCountOutputType
     */
    select?: ClinicCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeCountMedical_staffArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: medical_staffWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    clinic: number;
    healthcare_provider: number;
    insurance_provider: number;
    medical_staff: number;
    patient: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | UserCountOutputTypeCountClinicArgs;
    healthcare_provider?: boolean | UserCountOutputTypeCountHealthcare_providerArgs;
    insurance_provider?: boolean | UserCountOutputTypeCountInsurance_providerArgs;
    medical_staff?: boolean | UserCountOutputTypeCountMedical_staffArgs;
    patient?: boolean | UserCountOutputTypeCountPatientArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClinicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clinicWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHealthcare_providerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: healthcare_providerWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInsurance_providerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: insurance_providerWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMedical_staffArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: medical_staffWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPatientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: patientWhereInput;
    };

  /**
   * Models
   */

  /**
   * Model clinic
   */

  export type AggregateClinic = {
    _count: ClinicCountAggregateOutputType | null;
    _min: ClinicMinAggregateOutputType | null;
    _max: ClinicMaxAggregateOutputType | null;
  };

  export type ClinicMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    opening_hours: string | null;
    closing_hours: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type ClinicMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    opening_hours: string | null;
    closing_hours: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type ClinicCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    opening_hours: number;
    closing_hours: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type ClinicMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    opening_hours?: true;
    closing_hours?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type ClinicMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    opening_hours?: true;
    closing_hours?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type ClinicCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    opening_hours?: true;
    closing_hours?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type ClinicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clinic to aggregate.
     */
    where?: clinicWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clinics to fetch.
     */
    orderBy?: clinicOrderByWithRelationInput | clinicOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: clinicWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clinics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clinics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned clinics
     **/
    _count?: true | ClinicCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ClinicMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ClinicMaxAggregateInputType;
  };

  export type GetClinicAggregateType<T extends ClinicAggregateArgs> = {
    [P in keyof T & keyof AggregateClinic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClinic[P]>
      : GetScalarType<T[P], AggregateClinic[P]>;
  };

  export type clinicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clinicWhereInput;
    orderBy?: clinicOrderByWithAggregationInput | clinicOrderByWithAggregationInput[];
    by: ClinicScalarFieldEnum[] | ClinicScalarFieldEnum;
    having?: clinicScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClinicCountAggregateInputType | true;
    _min?: ClinicMinAggregateInputType;
    _max?: ClinicMaxAggregateInputType;
  };

  export type ClinicGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    opening_hours: string | null;
    closing_hours: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: ClinicCountAggregateOutputType | null;
    _min: ClinicMinAggregateOutputType | null;
    _max: ClinicMaxAggregateOutputType | null;
  };

  type GetClinicGroupByPayload<T extends clinicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClinicGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ClinicGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ClinicGroupByOutputType[P]>
          : GetScalarType<T[P], ClinicGroupByOutputType[P]>;
      }
    >
  >;

  export type clinicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      address?: boolean;
      opening_hours?: boolean;
      closing_hours?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      medical_staff?: boolean | clinic$medical_staffArgs<ExtArgs>;
      _count?: boolean | ClinicCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['clinic']
  >;

  export type clinicSelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    opening_hours?: boolean;
    closing_hours?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type clinicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    medical_staff?: boolean | clinic$medical_staffArgs<ExtArgs>;
    _count?: boolean | ClinicCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $clinicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'clinic';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      medical_staff: Prisma.$medical_staffPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        opening_hours: string | null;
        closing_hours: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['clinic']
    >;
    composites: {};
  };

  type clinicGetPayload<S extends boolean | null | undefined | clinicDefaultArgs> = $Result.GetResult<
    Prisma.$clinicPayload,
    S
  >;

  type clinicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    clinicFindManyArgs,
    'select' | 'include'
  > & {
    select?: ClinicCountAggregateInputType | true;
  };

  export interface clinicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clinic']; meta: { name: 'clinic' } };
    /**
     * Find zero or one Clinic that matches the filter.
     * @param {clinicFindUniqueArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends clinicFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, clinicFindUniqueArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Clinic that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {clinicFindUniqueOrThrowArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends clinicFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clinicFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Clinic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicFindFirstArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends clinicFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, clinicFindFirstArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Clinic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicFindFirstOrThrowArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends clinicFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clinicFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Clinics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clinics
     * const clinics = await prisma.clinic.findMany()
     *
     * // Get first 10 Clinics
     * const clinics = await prisma.clinic.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const clinicWithIdOnly = await prisma.clinic.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends clinicFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clinicFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Clinic.
     * @param {clinicCreateArgs} args - Arguments to create a Clinic.
     * @example
     * // Create one Clinic
     * const Clinic = await prisma.clinic.create({
     *   data: {
     *     // ... data to create a Clinic
     *   }
     * })
     *
     **/
    create<T extends clinicCreateArgs<ExtArgs>>(
      args: SelectSubset<T, clinicCreateArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Clinics.
     *     @param {clinicCreateManyArgs} args - Arguments to create many Clinics.
     *     @example
     *     // Create many Clinics
     *     const clinic = await prisma.clinic.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends clinicCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clinicCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Clinic.
     * @param {clinicDeleteArgs} args - Arguments to delete one Clinic.
     * @example
     * // Delete one Clinic
     * const Clinic = await prisma.clinic.delete({
     *   where: {
     *     // ... filter to delete one Clinic
     *   }
     * })
     *
     **/
    delete<T extends clinicDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, clinicDeleteArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Clinic.
     * @param {clinicUpdateArgs} args - Arguments to update one Clinic.
     * @example
     * // Update one Clinic
     * const clinic = await prisma.clinic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends clinicUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, clinicUpdateArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Clinics.
     * @param {clinicDeleteManyArgs} args - Arguments to filter Clinics to delete.
     * @example
     * // Delete a few Clinics
     * const { count } = await prisma.clinic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends clinicDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clinicDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Clinics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clinics
     * const clinic = await prisma.clinic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends clinicUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, clinicUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Clinic.
     * @param {clinicUpsertArgs} args - Arguments to update or create a Clinic.
     * @example
     * // Update or create a Clinic
     * const clinic = await prisma.clinic.upsert({
     *   create: {
     *     // ... data to create a Clinic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clinic we want to update
     *   }
     * })
     **/
    upsert<T extends clinicUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, clinicUpsertArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Clinics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicCountArgs} args - Arguments to filter Clinics to count.
     * @example
     * // Count the number of Clinics
     * const count = await prisma.clinic.count({
     *   where: {
     *     // ... the filter for the Clinics we want to count
     *   }
     * })
     **/
    count<T extends clinicCountArgs>(
      args?: Subset<T, clinicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClinicCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Clinic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClinicAggregateArgs>(
      args: Subset<T, ClinicAggregateArgs>,
    ): Prisma.PrismaPromise<GetClinicAggregateType<T>>;

    /**
     * Group by Clinic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicGroupByArgs} args - Group by arguments.
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
      T extends clinicGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clinicGroupByArgs['orderBy'] }
        : { orderBy?: clinicGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, clinicGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetClinicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the clinic model
     */
    readonly fields: clinicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clinic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clinicClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    medical_staff<T extends clinic$medical_staffArgs<ExtArgs> = {}>(
      args?: Subset<T, clinic$medical_staffArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medical_staffPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the clinic model
   */
  interface clinicFieldRefs {
    readonly id: FieldRef<'clinic', 'String'>;
    readonly description: FieldRef<'clinic', 'String'>;
    readonly address: FieldRef<'clinic', 'String'>;
    readonly opening_hours: FieldRef<'clinic', 'String'>;
    readonly closing_hours: FieldRef<'clinic', 'String'>;
    readonly name: FieldRef<'clinic', 'String'>;
    readonly created_at: FieldRef<'clinic', 'DateTime'>;
    readonly updated_at: FieldRef<'clinic', 'DateTime'>;
    readonly user_id: FieldRef<'clinic', 'String'>;
    readonly tenant_id: FieldRef<'clinic', 'String'>;
  }

  // Custom InputTypes

  /**
   * clinic findUnique
   */
  export type clinicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * Filter, which clinic to fetch.
     */
    where: clinicWhereUniqueInput;
  };

  /**
   * clinic findUniqueOrThrow
   */
  export type clinicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * Filter, which clinic to fetch.
     */
    where: clinicWhereUniqueInput;
  };

  /**
   * clinic findFirst
   */
  export type clinicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * Filter, which clinic to fetch.
     */
    where?: clinicWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clinics to fetch.
     */
    orderBy?: clinicOrderByWithRelationInput | clinicOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for clinics.
     */
    cursor?: clinicWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clinics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clinics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of clinics.
     */
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[];
  };

  /**
   * clinic findFirstOrThrow
   */
  export type clinicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * Filter, which clinic to fetch.
     */
    where?: clinicWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clinics to fetch.
     */
    orderBy?: clinicOrderByWithRelationInput | clinicOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for clinics.
     */
    cursor?: clinicWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clinics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clinics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of clinics.
     */
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[];
  };

  /**
   * clinic findMany
   */
  export type clinicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * Filter, which clinics to fetch.
     */
    where?: clinicWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clinics to fetch.
     */
    orderBy?: clinicOrderByWithRelationInput | clinicOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing clinics.
     */
    cursor?: clinicWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clinics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clinics.
     */
    skip?: number;
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[];
  };

  /**
   * clinic create
   */
  export type clinicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * The data needed to create a clinic.
     */
    data: XOR<clinicCreateInput, clinicUncheckedCreateInput>;
  };

  /**
   * clinic createMany
   */
  export type clinicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clinics.
     */
    data: clinicCreateManyInput | clinicCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * clinic update
   */
  export type clinicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * The data needed to update a clinic.
     */
    data: XOR<clinicUpdateInput, clinicUncheckedUpdateInput>;
    /**
     * Choose, which clinic to update.
     */
    where: clinicWhereUniqueInput;
  };

  /**
   * clinic updateMany
   */
  export type clinicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clinics.
     */
    data: XOR<clinicUpdateManyMutationInput, clinicUncheckedUpdateManyInput>;
    /**
     * Filter which clinics to update
     */
    where?: clinicWhereInput;
  };

  /**
   * clinic upsert
   */
  export type clinicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * The filter to search for the clinic to update in case it exists.
     */
    where: clinicWhereUniqueInput;
    /**
     * In case the clinic found by the `where` argument doesn't exist, create a new clinic with this data.
     */
    create: XOR<clinicCreateInput, clinicUncheckedCreateInput>;
    /**
     * In case the clinic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clinicUpdateInput, clinicUncheckedUpdateInput>;
  };

  /**
   * clinic delete
   */
  export type clinicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * Filter which clinic to delete.
     */
    where: clinicWhereUniqueInput;
  };

  /**
   * clinic deleteMany
   */
  export type clinicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clinics to delete
     */
    where?: clinicWhereInput;
  };

  /**
   * clinic.medical_staff
   */
  export type clinic$medical_staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_staff
     */
    select?: medical_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_staffInclude<ExtArgs> | null;
    where?: medical_staffWhereInput;
    orderBy?: medical_staffOrderByWithRelationInput | medical_staffOrderByWithRelationInput[];
    cursor?: medical_staffWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Medical_staffScalarFieldEnum | Medical_staffScalarFieldEnum[];
  };

  /**
   * clinic without action
   */
  export type clinicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
  };

  /**
   * Model healthcare_provider
   */

  export type AggregateHealthcare_provider = {
    _count: Healthcare_providerCountAggregateOutputType | null;
    _min: Healthcare_providerMinAggregateOutputType | null;
    _max: Healthcare_providerMaxAggregateOutputType | null;
  };

  export type Healthcare_providerMinAggregateOutputType = {
    id: string | null;
    provider_name: string | null;
    provider_type: string | null;
    contact_number: string | null;
    address: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Healthcare_providerMaxAggregateOutputType = {
    id: string | null;
    provider_name: string | null;
    provider_type: string | null;
    contact_number: string | null;
    address: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Healthcare_providerCountAggregateOutputType = {
    id: number;
    provider_name: number;
    provider_type: number;
    contact_number: number;
    address: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Healthcare_providerMinAggregateInputType = {
    id?: true;
    provider_name?: true;
    provider_type?: true;
    contact_number?: true;
    address?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Healthcare_providerMaxAggregateInputType = {
    id?: true;
    provider_name?: true;
    provider_type?: true;
    contact_number?: true;
    address?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Healthcare_providerCountAggregateInputType = {
    id?: true;
    provider_name?: true;
    provider_type?: true;
    contact_number?: true;
    address?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Healthcare_providerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which healthcare_provider to aggregate.
     */
    where?: healthcare_providerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of healthcare_providers to fetch.
     */
    orderBy?: healthcare_providerOrderByWithRelationInput | healthcare_providerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: healthcare_providerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` healthcare_providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` healthcare_providers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned healthcare_providers
     **/
    _count?: true | Healthcare_providerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Healthcare_providerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Healthcare_providerMaxAggregateInputType;
  };

  export type GetHealthcare_providerAggregateType<T extends Healthcare_providerAggregateArgs> = {
    [P in keyof T & keyof AggregateHealthcare_provider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHealthcare_provider[P]>
      : GetScalarType<T[P], AggregateHealthcare_provider[P]>;
  };

  export type healthcare_providerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: healthcare_providerWhereInput;
    orderBy?: healthcare_providerOrderByWithAggregationInput | healthcare_providerOrderByWithAggregationInput[];
    by: Healthcare_providerScalarFieldEnum[] | Healthcare_providerScalarFieldEnum;
    having?: healthcare_providerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Healthcare_providerCountAggregateInputType | true;
    _min?: Healthcare_providerMinAggregateInputType;
    _max?: Healthcare_providerMaxAggregateInputType;
  };

  export type Healthcare_providerGroupByOutputType = {
    id: string;
    provider_name: string;
    provider_type: string | null;
    contact_number: string | null;
    address: string | null;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Healthcare_providerCountAggregateOutputType | null;
    _min: Healthcare_providerMinAggregateOutputType | null;
    _max: Healthcare_providerMaxAggregateOutputType | null;
  };

  type GetHealthcare_providerGroupByPayload<T extends healthcare_providerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Healthcare_providerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Healthcare_providerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Healthcare_providerGroupByOutputType[P]>
          : GetScalarType<T[P], Healthcare_providerGroupByOutputType[P]>;
      }
    >
  >;

  export type healthcare_providerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        provider_name?: boolean;
        provider_type?: boolean;
        contact_number?: boolean;
        address?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['healthcare_provider']
    >;

  export type healthcare_providerSelectScalar = {
    id?: boolean;
    provider_name?: boolean;
    provider_type?: boolean;
    contact_number?: boolean;
    address?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type healthcare_providerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $healthcare_providerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'healthcare_provider';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        provider_name: string;
        provider_type: string | null;
        contact_number: string | null;
        address: string | null;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['healthcare_provider']
    >;
    composites: {};
  };

  type healthcare_providerGetPayload<S extends boolean | null | undefined | healthcare_providerDefaultArgs> =
    $Result.GetResult<Prisma.$healthcare_providerPayload, S>;

  type healthcare_providerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    healthcare_providerFindManyArgs,
    'select' | 'include'
  > & {
    select?: Healthcare_providerCountAggregateInputType | true;
  };

  export interface healthcare_providerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['healthcare_provider'];
      meta: { name: 'healthcare_provider' };
    };
    /**
     * Find zero or one Healthcare_provider that matches the filter.
     * @param {healthcare_providerFindUniqueArgs} args - Arguments to find a Healthcare_provider
     * @example
     * // Get one Healthcare_provider
     * const healthcare_provider = await prisma.healthcare_provider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends healthcare_providerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, healthcare_providerFindUniqueArgs<ExtArgs>>,
    ): Prisma__healthcare_providerClient<
      $Result.GetResult<Prisma.$healthcare_providerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Healthcare_provider that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {healthcare_providerFindUniqueOrThrowArgs} args - Arguments to find a Healthcare_provider
     * @example
     * // Get one Healthcare_provider
     * const healthcare_provider = await prisma.healthcare_provider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends healthcare_providerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, healthcare_providerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__healthcare_providerClient<
      $Result.GetResult<Prisma.$healthcare_providerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Healthcare_provider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {healthcare_providerFindFirstArgs} args - Arguments to find a Healthcare_provider
     * @example
     * // Get one Healthcare_provider
     * const healthcare_provider = await prisma.healthcare_provider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends healthcare_providerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, healthcare_providerFindFirstArgs<ExtArgs>>,
    ): Prisma__healthcare_providerClient<
      $Result.GetResult<Prisma.$healthcare_providerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Healthcare_provider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {healthcare_providerFindFirstOrThrowArgs} args - Arguments to find a Healthcare_provider
     * @example
     * // Get one Healthcare_provider
     * const healthcare_provider = await prisma.healthcare_provider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends healthcare_providerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, healthcare_providerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__healthcare_providerClient<
      $Result.GetResult<Prisma.$healthcare_providerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Healthcare_providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {healthcare_providerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Healthcare_providers
     * const healthcare_providers = await prisma.healthcare_provider.findMany()
     *
     * // Get first 10 Healthcare_providers
     * const healthcare_providers = await prisma.healthcare_provider.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const healthcare_providerWithIdOnly = await prisma.healthcare_provider.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends healthcare_providerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, healthcare_providerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$healthcare_providerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Healthcare_provider.
     * @param {healthcare_providerCreateArgs} args - Arguments to create a Healthcare_provider.
     * @example
     * // Create one Healthcare_provider
     * const Healthcare_provider = await prisma.healthcare_provider.create({
     *   data: {
     *     // ... data to create a Healthcare_provider
     *   }
     * })
     *
     **/
    create<T extends healthcare_providerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, healthcare_providerCreateArgs<ExtArgs>>,
    ): Prisma__healthcare_providerClient<
      $Result.GetResult<Prisma.$healthcare_providerPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Healthcare_providers.
     *     @param {healthcare_providerCreateManyArgs} args - Arguments to create many Healthcare_providers.
     *     @example
     *     // Create many Healthcare_providers
     *     const healthcare_provider = await prisma.healthcare_provider.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends healthcare_providerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, healthcare_providerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Healthcare_provider.
     * @param {healthcare_providerDeleteArgs} args - Arguments to delete one Healthcare_provider.
     * @example
     * // Delete one Healthcare_provider
     * const Healthcare_provider = await prisma.healthcare_provider.delete({
     *   where: {
     *     // ... filter to delete one Healthcare_provider
     *   }
     * })
     *
     **/
    delete<T extends healthcare_providerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, healthcare_providerDeleteArgs<ExtArgs>>,
    ): Prisma__healthcare_providerClient<
      $Result.GetResult<Prisma.$healthcare_providerPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Healthcare_provider.
     * @param {healthcare_providerUpdateArgs} args - Arguments to update one Healthcare_provider.
     * @example
     * // Update one Healthcare_provider
     * const healthcare_provider = await prisma.healthcare_provider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends healthcare_providerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, healthcare_providerUpdateArgs<ExtArgs>>,
    ): Prisma__healthcare_providerClient<
      $Result.GetResult<Prisma.$healthcare_providerPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Healthcare_providers.
     * @param {healthcare_providerDeleteManyArgs} args - Arguments to filter Healthcare_providers to delete.
     * @example
     * // Delete a few Healthcare_providers
     * const { count } = await prisma.healthcare_provider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends healthcare_providerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, healthcare_providerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Healthcare_providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {healthcare_providerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Healthcare_providers
     * const healthcare_provider = await prisma.healthcare_provider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends healthcare_providerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, healthcare_providerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Healthcare_provider.
     * @param {healthcare_providerUpsertArgs} args - Arguments to update or create a Healthcare_provider.
     * @example
     * // Update or create a Healthcare_provider
     * const healthcare_provider = await prisma.healthcare_provider.upsert({
     *   create: {
     *     // ... data to create a Healthcare_provider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Healthcare_provider we want to update
     *   }
     * })
     **/
    upsert<T extends healthcare_providerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, healthcare_providerUpsertArgs<ExtArgs>>,
    ): Prisma__healthcare_providerClient<
      $Result.GetResult<Prisma.$healthcare_providerPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Healthcare_providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {healthcare_providerCountArgs} args - Arguments to filter Healthcare_providers to count.
     * @example
     * // Count the number of Healthcare_providers
     * const count = await prisma.healthcare_provider.count({
     *   where: {
     *     // ... the filter for the Healthcare_providers we want to count
     *   }
     * })
     **/
    count<T extends healthcare_providerCountArgs>(
      args?: Subset<T, healthcare_providerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Healthcare_providerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Healthcare_provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Healthcare_providerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Healthcare_providerAggregateArgs>(
      args: Subset<T, Healthcare_providerAggregateArgs>,
    ): Prisma.PrismaPromise<GetHealthcare_providerAggregateType<T>>;

    /**
     * Group by Healthcare_provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {healthcare_providerGroupByArgs} args - Group by arguments.
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
      T extends healthcare_providerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: healthcare_providerGroupByArgs['orderBy'] }
        : { orderBy?: healthcare_providerGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, healthcare_providerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetHealthcare_providerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the healthcare_provider model
     */
    readonly fields: healthcare_providerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for healthcare_provider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__healthcare_providerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the healthcare_provider model
   */
  interface healthcare_providerFieldRefs {
    readonly id: FieldRef<'healthcare_provider', 'String'>;
    readonly provider_name: FieldRef<'healthcare_provider', 'String'>;
    readonly provider_type: FieldRef<'healthcare_provider', 'String'>;
    readonly contact_number: FieldRef<'healthcare_provider', 'String'>;
    readonly address: FieldRef<'healthcare_provider', 'String'>;
    readonly user_id: FieldRef<'healthcare_provider', 'String'>;
    readonly created_at: FieldRef<'healthcare_provider', 'DateTime'>;
    readonly updated_at: FieldRef<'healthcare_provider', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * healthcare_provider findUnique
   */
  export type healthcare_providerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healthcare_provider
     */
    select?: healthcare_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: healthcare_providerInclude<ExtArgs> | null;
    /**
     * Filter, which healthcare_provider to fetch.
     */
    where: healthcare_providerWhereUniqueInput;
  };

  /**
   * healthcare_provider findUniqueOrThrow
   */
  export type healthcare_providerFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the healthcare_provider
     */
    select?: healthcare_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: healthcare_providerInclude<ExtArgs> | null;
    /**
     * Filter, which healthcare_provider to fetch.
     */
    where: healthcare_providerWhereUniqueInput;
  };

  /**
   * healthcare_provider findFirst
   */
  export type healthcare_providerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healthcare_provider
     */
    select?: healthcare_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: healthcare_providerInclude<ExtArgs> | null;
    /**
     * Filter, which healthcare_provider to fetch.
     */
    where?: healthcare_providerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of healthcare_providers to fetch.
     */
    orderBy?: healthcare_providerOrderByWithRelationInput | healthcare_providerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for healthcare_providers.
     */
    cursor?: healthcare_providerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` healthcare_providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` healthcare_providers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of healthcare_providers.
     */
    distinct?: Healthcare_providerScalarFieldEnum | Healthcare_providerScalarFieldEnum[];
  };

  /**
   * healthcare_provider findFirstOrThrow
   */
  export type healthcare_providerFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the healthcare_provider
     */
    select?: healthcare_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: healthcare_providerInclude<ExtArgs> | null;
    /**
     * Filter, which healthcare_provider to fetch.
     */
    where?: healthcare_providerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of healthcare_providers to fetch.
     */
    orderBy?: healthcare_providerOrderByWithRelationInput | healthcare_providerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for healthcare_providers.
     */
    cursor?: healthcare_providerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` healthcare_providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` healthcare_providers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of healthcare_providers.
     */
    distinct?: Healthcare_providerScalarFieldEnum | Healthcare_providerScalarFieldEnum[];
  };

  /**
   * healthcare_provider findMany
   */
  export type healthcare_providerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healthcare_provider
     */
    select?: healthcare_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: healthcare_providerInclude<ExtArgs> | null;
    /**
     * Filter, which healthcare_providers to fetch.
     */
    where?: healthcare_providerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of healthcare_providers to fetch.
     */
    orderBy?: healthcare_providerOrderByWithRelationInput | healthcare_providerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing healthcare_providers.
     */
    cursor?: healthcare_providerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` healthcare_providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` healthcare_providers.
     */
    skip?: number;
    distinct?: Healthcare_providerScalarFieldEnum | Healthcare_providerScalarFieldEnum[];
  };

  /**
   * healthcare_provider create
   */
  export type healthcare_providerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healthcare_provider
     */
    select?: healthcare_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: healthcare_providerInclude<ExtArgs> | null;
    /**
     * The data needed to create a healthcare_provider.
     */
    data: XOR<healthcare_providerCreateInput, healthcare_providerUncheckedCreateInput>;
  };

  /**
   * healthcare_provider createMany
   */
  export type healthcare_providerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many healthcare_providers.
     */
    data: healthcare_providerCreateManyInput | healthcare_providerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * healthcare_provider update
   */
  export type healthcare_providerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healthcare_provider
     */
    select?: healthcare_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: healthcare_providerInclude<ExtArgs> | null;
    /**
     * The data needed to update a healthcare_provider.
     */
    data: XOR<healthcare_providerUpdateInput, healthcare_providerUncheckedUpdateInput>;
    /**
     * Choose, which healthcare_provider to update.
     */
    where: healthcare_providerWhereUniqueInput;
  };

  /**
   * healthcare_provider updateMany
   */
  export type healthcare_providerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update healthcare_providers.
     */
    data: XOR<healthcare_providerUpdateManyMutationInput, healthcare_providerUncheckedUpdateManyInput>;
    /**
     * Filter which healthcare_providers to update
     */
    where?: healthcare_providerWhereInput;
  };

  /**
   * healthcare_provider upsert
   */
  export type healthcare_providerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healthcare_provider
     */
    select?: healthcare_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: healthcare_providerInclude<ExtArgs> | null;
    /**
     * The filter to search for the healthcare_provider to update in case it exists.
     */
    where: healthcare_providerWhereUniqueInput;
    /**
     * In case the healthcare_provider found by the `where` argument doesn't exist, create a new healthcare_provider with this data.
     */
    create: XOR<healthcare_providerCreateInput, healthcare_providerUncheckedCreateInput>;
    /**
     * In case the healthcare_provider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<healthcare_providerUpdateInput, healthcare_providerUncheckedUpdateInput>;
  };

  /**
   * healthcare_provider delete
   */
  export type healthcare_providerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healthcare_provider
     */
    select?: healthcare_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: healthcare_providerInclude<ExtArgs> | null;
    /**
     * Filter which healthcare_provider to delete.
     */
    where: healthcare_providerWhereUniqueInput;
  };

  /**
   * healthcare_provider deleteMany
   */
  export type healthcare_providerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which healthcare_providers to delete
     */
    where?: healthcare_providerWhereInput;
  };

  /**
   * healthcare_provider without action
   */
  export type healthcare_providerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healthcare_provider
     */
    select?: healthcare_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: healthcare_providerInclude<ExtArgs> | null;
  };

  /**
   * Model insurance_provider
   */

  export type AggregateInsurance_provider = {
    _count: Insurance_providerCountAggregateOutputType | null;
    _min: Insurance_providerMinAggregateOutputType | null;
    _max: Insurance_providerMaxAggregateOutputType | null;
  };

  export type Insurance_providerMinAggregateOutputType = {
    id: string | null;
    provider_name: string | null;
    contact_number: string | null;
    address: string | null;
    policy_details: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Insurance_providerMaxAggregateOutputType = {
    id: string | null;
    provider_name: string | null;
    contact_number: string | null;
    address: string | null;
    policy_details: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Insurance_providerCountAggregateOutputType = {
    id: number;
    provider_name: number;
    contact_number: number;
    address: number;
    policy_details: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Insurance_providerMinAggregateInputType = {
    id?: true;
    provider_name?: true;
    contact_number?: true;
    address?: true;
    policy_details?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Insurance_providerMaxAggregateInputType = {
    id?: true;
    provider_name?: true;
    contact_number?: true;
    address?: true;
    policy_details?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Insurance_providerCountAggregateInputType = {
    id?: true;
    provider_name?: true;
    contact_number?: true;
    address?: true;
    policy_details?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Insurance_providerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which insurance_provider to aggregate.
     */
    where?: insurance_providerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of insurance_providers to fetch.
     */
    orderBy?: insurance_providerOrderByWithRelationInput | insurance_providerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: insurance_providerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` insurance_providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` insurance_providers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned insurance_providers
     **/
    _count?: true | Insurance_providerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Insurance_providerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Insurance_providerMaxAggregateInputType;
  };

  export type GetInsurance_providerAggregateType<T extends Insurance_providerAggregateArgs> = {
    [P in keyof T & keyof AggregateInsurance_provider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInsurance_provider[P]>
      : GetScalarType<T[P], AggregateInsurance_provider[P]>;
  };

  export type insurance_providerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: insurance_providerWhereInput;
    orderBy?: insurance_providerOrderByWithAggregationInput | insurance_providerOrderByWithAggregationInput[];
    by: Insurance_providerScalarFieldEnum[] | Insurance_providerScalarFieldEnum;
    having?: insurance_providerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Insurance_providerCountAggregateInputType | true;
    _min?: Insurance_providerMinAggregateInputType;
    _max?: Insurance_providerMaxAggregateInputType;
  };

  export type Insurance_providerGroupByOutputType = {
    id: string;
    provider_name: string;
    contact_number: string | null;
    address: string | null;
    policy_details: string | null;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Insurance_providerCountAggregateOutputType | null;
    _min: Insurance_providerMinAggregateOutputType | null;
    _max: Insurance_providerMaxAggregateOutputType | null;
  };

  type GetInsurance_providerGroupByPayload<T extends insurance_providerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Insurance_providerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Insurance_providerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Insurance_providerGroupByOutputType[P]>
          : GetScalarType<T[P], Insurance_providerGroupByOutputType[P]>;
      }
    >
  >;

  export type insurance_providerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        provider_name?: boolean;
        contact_number?: boolean;
        address?: boolean;
        policy_details?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['insurance_provider']
    >;

  export type insurance_providerSelectScalar = {
    id?: boolean;
    provider_name?: boolean;
    contact_number?: boolean;
    address?: boolean;
    policy_details?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type insurance_providerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $insurance_providerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'insurance_provider';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        provider_name: string;
        contact_number: string | null;
        address: string | null;
        policy_details: string | null;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['insurance_provider']
    >;
    composites: {};
  };

  type insurance_providerGetPayload<S extends boolean | null | undefined | insurance_providerDefaultArgs> =
    $Result.GetResult<Prisma.$insurance_providerPayload, S>;

  type insurance_providerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    insurance_providerFindManyArgs,
    'select' | 'include'
  > & {
    select?: Insurance_providerCountAggregateInputType | true;
  };

  export interface insurance_providerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['insurance_provider'];
      meta: { name: 'insurance_provider' };
    };
    /**
     * Find zero or one Insurance_provider that matches the filter.
     * @param {insurance_providerFindUniqueArgs} args - Arguments to find a Insurance_provider
     * @example
     * // Get one Insurance_provider
     * const insurance_provider = await prisma.insurance_provider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends insurance_providerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, insurance_providerFindUniqueArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Insurance_provider that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {insurance_providerFindUniqueOrThrowArgs} args - Arguments to find a Insurance_provider
     * @example
     * // Get one Insurance_provider
     * const insurance_provider = await prisma.insurance_provider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends insurance_providerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, insurance_providerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Insurance_provider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurance_providerFindFirstArgs} args - Arguments to find a Insurance_provider
     * @example
     * // Get one Insurance_provider
     * const insurance_provider = await prisma.insurance_provider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends insurance_providerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, insurance_providerFindFirstArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Insurance_provider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurance_providerFindFirstOrThrowArgs} args - Arguments to find a Insurance_provider
     * @example
     * // Get one Insurance_provider
     * const insurance_provider = await prisma.insurance_provider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends insurance_providerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, insurance_providerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Insurance_providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurance_providerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Insurance_providers
     * const insurance_providers = await prisma.insurance_provider.findMany()
     *
     * // Get first 10 Insurance_providers
     * const insurance_providers = await prisma.insurance_provider.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const insurance_providerWithIdOnly = await prisma.insurance_provider.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends insurance_providerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, insurance_providerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Insurance_provider.
     * @param {insurance_providerCreateArgs} args - Arguments to create a Insurance_provider.
     * @example
     * // Create one Insurance_provider
     * const Insurance_provider = await prisma.insurance_provider.create({
     *   data: {
     *     // ... data to create a Insurance_provider
     *   }
     * })
     *
     **/
    create<T extends insurance_providerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, insurance_providerCreateArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Insurance_providers.
     *     @param {insurance_providerCreateManyArgs} args - Arguments to create many Insurance_providers.
     *     @example
     *     // Create many Insurance_providers
     *     const insurance_provider = await prisma.insurance_provider.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends insurance_providerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, insurance_providerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Insurance_provider.
     * @param {insurance_providerDeleteArgs} args - Arguments to delete one Insurance_provider.
     * @example
     * // Delete one Insurance_provider
     * const Insurance_provider = await prisma.insurance_provider.delete({
     *   where: {
     *     // ... filter to delete one Insurance_provider
     *   }
     * })
     *
     **/
    delete<T extends insurance_providerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, insurance_providerDeleteArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Insurance_provider.
     * @param {insurance_providerUpdateArgs} args - Arguments to update one Insurance_provider.
     * @example
     * // Update one Insurance_provider
     * const insurance_provider = await prisma.insurance_provider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends insurance_providerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, insurance_providerUpdateArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Insurance_providers.
     * @param {insurance_providerDeleteManyArgs} args - Arguments to filter Insurance_providers to delete.
     * @example
     * // Delete a few Insurance_providers
     * const { count } = await prisma.insurance_provider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends insurance_providerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, insurance_providerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Insurance_providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurance_providerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Insurance_providers
     * const insurance_provider = await prisma.insurance_provider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends insurance_providerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, insurance_providerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Insurance_provider.
     * @param {insurance_providerUpsertArgs} args - Arguments to update or create a Insurance_provider.
     * @example
     * // Update or create a Insurance_provider
     * const insurance_provider = await prisma.insurance_provider.upsert({
     *   create: {
     *     // ... data to create a Insurance_provider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Insurance_provider we want to update
     *   }
     * })
     **/
    upsert<T extends insurance_providerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, insurance_providerUpsertArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Insurance_providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurance_providerCountArgs} args - Arguments to filter Insurance_providers to count.
     * @example
     * // Count the number of Insurance_providers
     * const count = await prisma.insurance_provider.count({
     *   where: {
     *     // ... the filter for the Insurance_providers we want to count
     *   }
     * })
     **/
    count<T extends insurance_providerCountArgs>(
      args?: Subset<T, insurance_providerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Insurance_providerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Insurance_provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Insurance_providerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Insurance_providerAggregateArgs>(
      args: Subset<T, Insurance_providerAggregateArgs>,
    ): Prisma.PrismaPromise<GetInsurance_providerAggregateType<T>>;

    /**
     * Group by Insurance_provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurance_providerGroupByArgs} args - Group by arguments.
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
      T extends insurance_providerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: insurance_providerGroupByArgs['orderBy'] }
        : { orderBy?: insurance_providerGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, insurance_providerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetInsurance_providerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the insurance_provider model
     */
    readonly fields: insurance_providerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for insurance_provider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__insurance_providerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the insurance_provider model
   */
  interface insurance_providerFieldRefs {
    readonly id: FieldRef<'insurance_provider', 'String'>;
    readonly provider_name: FieldRef<'insurance_provider', 'String'>;
    readonly contact_number: FieldRef<'insurance_provider', 'String'>;
    readonly address: FieldRef<'insurance_provider', 'String'>;
    readonly policy_details: FieldRef<'insurance_provider', 'String'>;
    readonly user_id: FieldRef<'insurance_provider', 'String'>;
    readonly created_at: FieldRef<'insurance_provider', 'DateTime'>;
    readonly updated_at: FieldRef<'insurance_provider', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * insurance_provider findUnique
   */
  export type insurance_providerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * Filter, which insurance_provider to fetch.
     */
    where: insurance_providerWhereUniqueInput;
  };

  /**
   * insurance_provider findUniqueOrThrow
   */
  export type insurance_providerFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * Filter, which insurance_provider to fetch.
     */
    where: insurance_providerWhereUniqueInput;
  };

  /**
   * insurance_provider findFirst
   */
  export type insurance_providerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * Filter, which insurance_provider to fetch.
     */
    where?: insurance_providerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of insurance_providers to fetch.
     */
    orderBy?: insurance_providerOrderByWithRelationInput | insurance_providerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for insurance_providers.
     */
    cursor?: insurance_providerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` insurance_providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` insurance_providers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of insurance_providers.
     */
    distinct?: Insurance_providerScalarFieldEnum | Insurance_providerScalarFieldEnum[];
  };

  /**
   * insurance_provider findFirstOrThrow
   */
  export type insurance_providerFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * Filter, which insurance_provider to fetch.
     */
    where?: insurance_providerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of insurance_providers to fetch.
     */
    orderBy?: insurance_providerOrderByWithRelationInput | insurance_providerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for insurance_providers.
     */
    cursor?: insurance_providerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` insurance_providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` insurance_providers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of insurance_providers.
     */
    distinct?: Insurance_providerScalarFieldEnum | Insurance_providerScalarFieldEnum[];
  };

  /**
   * insurance_provider findMany
   */
  export type insurance_providerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * Filter, which insurance_providers to fetch.
     */
    where?: insurance_providerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of insurance_providers to fetch.
     */
    orderBy?: insurance_providerOrderByWithRelationInput | insurance_providerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing insurance_providers.
     */
    cursor?: insurance_providerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` insurance_providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` insurance_providers.
     */
    skip?: number;
    distinct?: Insurance_providerScalarFieldEnum | Insurance_providerScalarFieldEnum[];
  };

  /**
   * insurance_provider create
   */
  export type insurance_providerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * The data needed to create a insurance_provider.
     */
    data: XOR<insurance_providerCreateInput, insurance_providerUncheckedCreateInput>;
  };

  /**
   * insurance_provider createMany
   */
  export type insurance_providerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many insurance_providers.
     */
    data: insurance_providerCreateManyInput | insurance_providerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * insurance_provider update
   */
  export type insurance_providerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * The data needed to update a insurance_provider.
     */
    data: XOR<insurance_providerUpdateInput, insurance_providerUncheckedUpdateInput>;
    /**
     * Choose, which insurance_provider to update.
     */
    where: insurance_providerWhereUniqueInput;
  };

  /**
   * insurance_provider updateMany
   */
  export type insurance_providerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update insurance_providers.
     */
    data: XOR<insurance_providerUpdateManyMutationInput, insurance_providerUncheckedUpdateManyInput>;
    /**
     * Filter which insurance_providers to update
     */
    where?: insurance_providerWhereInput;
  };

  /**
   * insurance_provider upsert
   */
  export type insurance_providerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * The filter to search for the insurance_provider to update in case it exists.
     */
    where: insurance_providerWhereUniqueInput;
    /**
     * In case the insurance_provider found by the `where` argument doesn't exist, create a new insurance_provider with this data.
     */
    create: XOR<insurance_providerCreateInput, insurance_providerUncheckedCreateInput>;
    /**
     * In case the insurance_provider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<insurance_providerUpdateInput, insurance_providerUncheckedUpdateInput>;
  };

  /**
   * insurance_provider delete
   */
  export type insurance_providerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * Filter which insurance_provider to delete.
     */
    where: insurance_providerWhereUniqueInput;
  };

  /**
   * insurance_provider deleteMany
   */
  export type insurance_providerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which insurance_providers to delete
     */
    where?: insurance_providerWhereInput;
  };

  /**
   * insurance_provider without action
   */
  export type insurance_providerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
  };

  /**
   * Model medical_staff
   */

  export type AggregateMedical_staff = {
    _count: Medical_staffCountAggregateOutputType | null;
    _min: Medical_staffMinAggregateOutputType | null;
    _max: Medical_staffMaxAggregateOutputType | null;
  };

  export type Medical_staffMinAggregateOutputType = {
    id: string | null;
    staff_name: string | null;
    designation: string | null;
    specialization: string | null;
    contact_number: string | null;
    clinic_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Medical_staffMaxAggregateOutputType = {
    id: string | null;
    staff_name: string | null;
    designation: string | null;
    specialization: string | null;
    contact_number: string | null;
    clinic_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Medical_staffCountAggregateOutputType = {
    id: number;
    staff_name: number;
    designation: number;
    specialization: number;
    contact_number: number;
    clinic_id: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Medical_staffMinAggregateInputType = {
    id?: true;
    staff_name?: true;
    designation?: true;
    specialization?: true;
    contact_number?: true;
    clinic_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Medical_staffMaxAggregateInputType = {
    id?: true;
    staff_name?: true;
    designation?: true;
    specialization?: true;
    contact_number?: true;
    clinic_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Medical_staffCountAggregateInputType = {
    id?: true;
    staff_name?: true;
    designation?: true;
    specialization?: true;
    contact_number?: true;
    clinic_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Medical_staffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medical_staff to aggregate.
     */
    where?: medical_staffWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of medical_staffs to fetch.
     */
    orderBy?: medical_staffOrderByWithRelationInput | medical_staffOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: medical_staffWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` medical_staffs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` medical_staffs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned medical_staffs
     **/
    _count?: true | Medical_staffCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Medical_staffMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Medical_staffMaxAggregateInputType;
  };

  export type GetMedical_staffAggregateType<T extends Medical_staffAggregateArgs> = {
    [P in keyof T & keyof AggregateMedical_staff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedical_staff[P]>
      : GetScalarType<T[P], AggregateMedical_staff[P]>;
  };

  export type medical_staffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: medical_staffWhereInput;
    orderBy?: medical_staffOrderByWithAggregationInput | medical_staffOrderByWithAggregationInput[];
    by: Medical_staffScalarFieldEnum[] | Medical_staffScalarFieldEnum;
    having?: medical_staffScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Medical_staffCountAggregateInputType | true;
    _min?: Medical_staffMinAggregateInputType;
    _max?: Medical_staffMaxAggregateInputType;
  };

  export type Medical_staffGroupByOutputType = {
    id: string;
    staff_name: string;
    designation: string | null;
    specialization: string | null;
    contact_number: string | null;
    clinic_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Medical_staffCountAggregateOutputType | null;
    _min: Medical_staffMinAggregateOutputType | null;
    _max: Medical_staffMaxAggregateOutputType | null;
  };

  type GetMedical_staffGroupByPayload<T extends medical_staffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Medical_staffGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Medical_staffGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Medical_staffGroupByOutputType[P]>
          : GetScalarType<T[P], Medical_staffGroupByOutputType[P]>;
      }
    >
  >;

  export type medical_staffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        staff_name?: boolean;
        designation?: boolean;
        specialization?: boolean;
        contact_number?: boolean;
        clinic_id?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        clinic?: boolean | clinicDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['medical_staff']
    >;

  export type medical_staffSelectScalar = {
    id?: boolean;
    staff_name?: boolean;
    designation?: boolean;
    specialization?: boolean;
    contact_number?: boolean;
    clinic_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type medical_staffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | clinicDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $medical_staffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'medical_staff';
    objects: {
      clinic: Prisma.$clinicPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        staff_name: string;
        designation: string | null;
        specialization: string | null;
        contact_number: string | null;
        clinic_id: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['medical_staff']
    >;
    composites: {};
  };

  type medical_staffGetPayload<S extends boolean | null | undefined | medical_staffDefaultArgs> = $Result.GetResult<
    Prisma.$medical_staffPayload,
    S
  >;

  type medical_staffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    medical_staffFindManyArgs,
    'select' | 'include'
  > & {
    select?: Medical_staffCountAggregateInputType | true;
  };

  export interface medical_staffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['medical_staff']; meta: { name: 'medical_staff' } };
    /**
     * Find zero or one Medical_staff that matches the filter.
     * @param {medical_staffFindUniqueArgs} args - Arguments to find a Medical_staff
     * @example
     * // Get one Medical_staff
     * const medical_staff = await prisma.medical_staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends medical_staffFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, medical_staffFindUniqueArgs<ExtArgs>>,
    ): Prisma__medical_staffClient<
      $Result.GetResult<Prisma.$medical_staffPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Medical_staff that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {medical_staffFindUniqueOrThrowArgs} args - Arguments to find a Medical_staff
     * @example
     * // Get one Medical_staff
     * const medical_staff = await prisma.medical_staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends medical_staffFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_staffFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__medical_staffClient<
      $Result.GetResult<Prisma.$medical_staffPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Medical_staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_staffFindFirstArgs} args - Arguments to find a Medical_staff
     * @example
     * // Get one Medical_staff
     * const medical_staff = await prisma.medical_staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends medical_staffFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_staffFindFirstArgs<ExtArgs>>,
    ): Prisma__medical_staffClient<
      $Result.GetResult<Prisma.$medical_staffPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Medical_staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_staffFindFirstOrThrowArgs} args - Arguments to find a Medical_staff
     * @example
     * // Get one Medical_staff
     * const medical_staff = await prisma.medical_staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends medical_staffFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_staffFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__medical_staffClient<
      $Result.GetResult<Prisma.$medical_staffPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Medical_staffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_staffFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medical_staffs
     * const medical_staffs = await prisma.medical_staff.findMany()
     *
     * // Get first 10 Medical_staffs
     * const medical_staffs = await prisma.medical_staff.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const medical_staffWithIdOnly = await prisma.medical_staff.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends medical_staffFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_staffFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medical_staffPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Medical_staff.
     * @param {medical_staffCreateArgs} args - Arguments to create a Medical_staff.
     * @example
     * // Create one Medical_staff
     * const Medical_staff = await prisma.medical_staff.create({
     *   data: {
     *     // ... data to create a Medical_staff
     *   }
     * })
     *
     **/
    create<T extends medical_staffCreateArgs<ExtArgs>>(
      args: SelectSubset<T, medical_staffCreateArgs<ExtArgs>>,
    ): Prisma__medical_staffClient<
      $Result.GetResult<Prisma.$medical_staffPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Medical_staffs.
     *     @param {medical_staffCreateManyArgs} args - Arguments to create many Medical_staffs.
     *     @example
     *     // Create many Medical_staffs
     *     const medical_staff = await prisma.medical_staff.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends medical_staffCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_staffCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Medical_staff.
     * @param {medical_staffDeleteArgs} args - Arguments to delete one Medical_staff.
     * @example
     * // Delete one Medical_staff
     * const Medical_staff = await prisma.medical_staff.delete({
     *   where: {
     *     // ... filter to delete one Medical_staff
     *   }
     * })
     *
     **/
    delete<T extends medical_staffDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, medical_staffDeleteArgs<ExtArgs>>,
    ): Prisma__medical_staffClient<
      $Result.GetResult<Prisma.$medical_staffPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Medical_staff.
     * @param {medical_staffUpdateArgs} args - Arguments to update one Medical_staff.
     * @example
     * // Update one Medical_staff
     * const medical_staff = await prisma.medical_staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends medical_staffUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, medical_staffUpdateArgs<ExtArgs>>,
    ): Prisma__medical_staffClient<
      $Result.GetResult<Prisma.$medical_staffPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Medical_staffs.
     * @param {medical_staffDeleteManyArgs} args - Arguments to filter Medical_staffs to delete.
     * @example
     * // Delete a few Medical_staffs
     * const { count } = await prisma.medical_staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends medical_staffDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_staffDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Medical_staffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_staffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medical_staffs
     * const medical_staff = await prisma.medical_staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends medical_staffUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, medical_staffUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Medical_staff.
     * @param {medical_staffUpsertArgs} args - Arguments to update or create a Medical_staff.
     * @example
     * // Update or create a Medical_staff
     * const medical_staff = await prisma.medical_staff.upsert({
     *   create: {
     *     // ... data to create a Medical_staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medical_staff we want to update
     *   }
     * })
     **/
    upsert<T extends medical_staffUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, medical_staffUpsertArgs<ExtArgs>>,
    ): Prisma__medical_staffClient<
      $Result.GetResult<Prisma.$medical_staffPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Medical_staffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_staffCountArgs} args - Arguments to filter Medical_staffs to count.
     * @example
     * // Count the number of Medical_staffs
     * const count = await prisma.medical_staff.count({
     *   where: {
     *     // ... the filter for the Medical_staffs we want to count
     *   }
     * })
     **/
    count<T extends medical_staffCountArgs>(
      args?: Subset<T, medical_staffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Medical_staffCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Medical_staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medical_staffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Medical_staffAggregateArgs>(
      args: Subset<T, Medical_staffAggregateArgs>,
    ): Prisma.PrismaPromise<GetMedical_staffAggregateType<T>>;

    /**
     * Group by Medical_staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_staffGroupByArgs} args - Group by arguments.
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
      T extends medical_staffGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: medical_staffGroupByArgs['orderBy'] }
        : { orderBy?: medical_staffGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, medical_staffGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetMedical_staffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the medical_staff model
     */
    readonly fields: medical_staffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for medical_staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__medical_staffClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    clinic<T extends clinicDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, clinicDefaultArgs<ExtArgs>>,
    ): Prisma__clinicClient<
      $Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the medical_staff model
   */
  interface medical_staffFieldRefs {
    readonly id: FieldRef<'medical_staff', 'String'>;
    readonly staff_name: FieldRef<'medical_staff', 'String'>;
    readonly designation: FieldRef<'medical_staff', 'String'>;
    readonly specialization: FieldRef<'medical_staff', 'String'>;
    readonly contact_number: FieldRef<'medical_staff', 'String'>;
    readonly clinic_id: FieldRef<'medical_staff', 'String'>;
    readonly user_id: FieldRef<'medical_staff', 'String'>;
    readonly created_at: FieldRef<'medical_staff', 'DateTime'>;
    readonly updated_at: FieldRef<'medical_staff', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * medical_staff findUnique
   */
  export type medical_staffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_staff
     */
    select?: medical_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_staffInclude<ExtArgs> | null;
    /**
     * Filter, which medical_staff to fetch.
     */
    where: medical_staffWhereUniqueInput;
  };

  /**
   * medical_staff findUniqueOrThrow
   */
  export type medical_staffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_staff
     */
    select?: medical_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_staffInclude<ExtArgs> | null;
    /**
     * Filter, which medical_staff to fetch.
     */
    where: medical_staffWhereUniqueInput;
  };

  /**
   * medical_staff findFirst
   */
  export type medical_staffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_staff
     */
    select?: medical_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_staffInclude<ExtArgs> | null;
    /**
     * Filter, which medical_staff to fetch.
     */
    where?: medical_staffWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of medical_staffs to fetch.
     */
    orderBy?: medical_staffOrderByWithRelationInput | medical_staffOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for medical_staffs.
     */
    cursor?: medical_staffWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` medical_staffs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` medical_staffs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of medical_staffs.
     */
    distinct?: Medical_staffScalarFieldEnum | Medical_staffScalarFieldEnum[];
  };

  /**
   * medical_staff findFirstOrThrow
   */
  export type medical_staffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_staff
     */
    select?: medical_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_staffInclude<ExtArgs> | null;
    /**
     * Filter, which medical_staff to fetch.
     */
    where?: medical_staffWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of medical_staffs to fetch.
     */
    orderBy?: medical_staffOrderByWithRelationInput | medical_staffOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for medical_staffs.
     */
    cursor?: medical_staffWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` medical_staffs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` medical_staffs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of medical_staffs.
     */
    distinct?: Medical_staffScalarFieldEnum | Medical_staffScalarFieldEnum[];
  };

  /**
   * medical_staff findMany
   */
  export type medical_staffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_staff
     */
    select?: medical_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_staffInclude<ExtArgs> | null;
    /**
     * Filter, which medical_staffs to fetch.
     */
    where?: medical_staffWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of medical_staffs to fetch.
     */
    orderBy?: medical_staffOrderByWithRelationInput | medical_staffOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing medical_staffs.
     */
    cursor?: medical_staffWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` medical_staffs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` medical_staffs.
     */
    skip?: number;
    distinct?: Medical_staffScalarFieldEnum | Medical_staffScalarFieldEnum[];
  };

  /**
   * medical_staff create
   */
  export type medical_staffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_staff
     */
    select?: medical_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_staffInclude<ExtArgs> | null;
    /**
     * The data needed to create a medical_staff.
     */
    data: XOR<medical_staffCreateInput, medical_staffUncheckedCreateInput>;
  };

  /**
   * medical_staff createMany
   */
  export type medical_staffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many medical_staffs.
     */
    data: medical_staffCreateManyInput | medical_staffCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * medical_staff update
   */
  export type medical_staffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_staff
     */
    select?: medical_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_staffInclude<ExtArgs> | null;
    /**
     * The data needed to update a medical_staff.
     */
    data: XOR<medical_staffUpdateInput, medical_staffUncheckedUpdateInput>;
    /**
     * Choose, which medical_staff to update.
     */
    where: medical_staffWhereUniqueInput;
  };

  /**
   * medical_staff updateMany
   */
  export type medical_staffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update medical_staffs.
     */
    data: XOR<medical_staffUpdateManyMutationInput, medical_staffUncheckedUpdateManyInput>;
    /**
     * Filter which medical_staffs to update
     */
    where?: medical_staffWhereInput;
  };

  /**
   * medical_staff upsert
   */
  export type medical_staffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_staff
     */
    select?: medical_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_staffInclude<ExtArgs> | null;
    /**
     * The filter to search for the medical_staff to update in case it exists.
     */
    where: medical_staffWhereUniqueInput;
    /**
     * In case the medical_staff found by the `where` argument doesn't exist, create a new medical_staff with this data.
     */
    create: XOR<medical_staffCreateInput, medical_staffUncheckedCreateInput>;
    /**
     * In case the medical_staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<medical_staffUpdateInput, medical_staffUncheckedUpdateInput>;
  };

  /**
   * medical_staff delete
   */
  export type medical_staffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_staff
     */
    select?: medical_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_staffInclude<ExtArgs> | null;
    /**
     * Filter which medical_staff to delete.
     */
    where: medical_staffWhereUniqueInput;
  };

  /**
   * medical_staff deleteMany
   */
  export type medical_staffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medical_staffs to delete
     */
    where?: medical_staffWhereInput;
  };

  /**
   * medical_staff without action
   */
  export type medical_staffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_staff
     */
    select?: medical_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_staffInclude<ExtArgs> | null;
  };

  /**
   * Model patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null;
    _min: PatientMinAggregateOutputType | null;
    _max: PatientMaxAggregateOutputType | null;
  };

  export type PatientMinAggregateOutputType = {
    id: string | null;
    patient_name: string | null;
    gender: string | null;
    date_of_birth: Date | null;
    contact_number: string | null;
    address: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PatientMaxAggregateOutputType = {
    id: string | null;
    patient_name: string | null;
    gender: string | null;
    date_of_birth: Date | null;
    contact_number: string | null;
    address: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PatientCountAggregateOutputType = {
    id: number;
    patient_name: number;
    gender: number;
    date_of_birth: number;
    contact_number: number;
    address: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type PatientMinAggregateInputType = {
    id?: true;
    patient_name?: true;
    gender?: true;
    date_of_birth?: true;
    contact_number?: true;
    address?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PatientMaxAggregateInputType = {
    id?: true;
    patient_name?: true;
    gender?: true;
    date_of_birth?: true;
    contact_number?: true;
    address?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PatientCountAggregateInputType = {
    id?: true;
    patient_name?: true;
    gender?: true;
    date_of_birth?: true;
    contact_number?: true;
    address?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patient to aggregate.
     */
    where?: patientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: patientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` patients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` patients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned patients
     **/
    _count?: true | PatientCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PatientMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PatientMaxAggregateInputType;
  };

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
    [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>;
  };

  export type patientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: patientWhereInput;
    orderBy?: patientOrderByWithAggregationInput | patientOrderByWithAggregationInput[];
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum;
    having?: patientScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PatientCountAggregateInputType | true;
    _min?: PatientMinAggregateInputType;
    _max?: PatientMaxAggregateInputType;
  };

  export type PatientGroupByOutputType = {
    id: string;
    patient_name: string;
    gender: string | null;
    date_of_birth: Date | null;
    contact_number: string | null;
    address: string | null;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: PatientCountAggregateOutputType | null;
    _min: PatientMinAggregateOutputType | null;
    _max: PatientMaxAggregateOutputType | null;
  };

  type GetPatientGroupByPayload<T extends patientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PatientGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
          : GetScalarType<T[P], PatientGroupByOutputType[P]>;
      }
    >
  >;

  export type patientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      patient_name?: boolean;
      gender?: boolean;
      date_of_birth?: boolean;
      contact_number?: boolean;
      address?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['patient']
  >;

  export type patientSelectScalar = {
    id?: boolean;
    patient_name?: boolean;
    gender?: boolean;
    date_of_birth?: boolean;
    contact_number?: boolean;
    address?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type patientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $patientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'patient';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        patient_name: string;
        gender: string | null;
        date_of_birth: Date | null;
        contact_number: string | null;
        address: string | null;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['patient']
    >;
    composites: {};
  };

  type patientGetPayload<S extends boolean | null | undefined | patientDefaultArgs> = $Result.GetResult<
    Prisma.$patientPayload,
    S
  >;

  type patientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    patientFindManyArgs,
    'select' | 'include'
  > & {
    select?: PatientCountAggregateInputType | true;
  };

  export interface patientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['patient']; meta: { name: 'patient' } };
    /**
     * Find zero or one Patient that matches the filter.
     * @param {patientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends patientFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, patientFindUniqueArgs<ExtArgs>>,
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Patient that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {patientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends patientFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, patientFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__patientClient<
      $Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends patientFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, patientFindFirstArgs<ExtArgs>>,
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends patientFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, patientFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     *
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends patientFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, patientFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Patient.
     * @param {patientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     *
     **/
    create<T extends patientCreateArgs<ExtArgs>>(
      args: SelectSubset<T, patientCreateArgs<ExtArgs>>,
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Patients.
     *     @param {patientCreateManyArgs} args - Arguments to create many Patients.
     *     @example
     *     // Create many Patients
     *     const patient = await prisma.patient.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends patientCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, patientCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Patient.
     * @param {patientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     *
     **/
    delete<T extends patientDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, patientDeleteArgs<ExtArgs>>,
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Patient.
     * @param {patientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends patientUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, patientUpdateArgs<ExtArgs>>,
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Patients.
     * @param {patientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends patientDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, patientDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends patientUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, patientUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Patient.
     * @param {patientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     **/
    upsert<T extends patientUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, patientUpsertArgs<ExtArgs>>,
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
     **/
    count<T extends patientCountArgs>(
      args?: Subset<T, patientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(
      args: Subset<T, PatientAggregateArgs>,
    ): Prisma.PrismaPromise<GetPatientAggregateType<T>>;

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientGroupByArgs} args - Group by arguments.
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
      T extends patientGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: patientGroupByArgs['orderBy'] }
        : { orderBy?: patientGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, patientGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the patient model
     */
    readonly fields: patientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__patientClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the patient model
   */
  interface patientFieldRefs {
    readonly id: FieldRef<'patient', 'String'>;
    readonly patient_name: FieldRef<'patient', 'String'>;
    readonly gender: FieldRef<'patient', 'String'>;
    readonly date_of_birth: FieldRef<'patient', 'DateTime'>;
    readonly contact_number: FieldRef<'patient', 'String'>;
    readonly address: FieldRef<'patient', 'String'>;
    readonly user_id: FieldRef<'patient', 'String'>;
    readonly created_at: FieldRef<'patient', 'DateTime'>;
    readonly updated_at: FieldRef<'patient', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * patient findUnique
   */
  export type patientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * Filter, which patient to fetch.
     */
    where: patientWhereUniqueInput;
  };

  /**
   * patient findUniqueOrThrow
   */
  export type patientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * Filter, which patient to fetch.
     */
    where: patientWhereUniqueInput;
  };

  /**
   * patient findFirst
   */
  export type patientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * Filter, which patient to fetch.
     */
    where?: patientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for patients.
     */
    cursor?: patientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` patients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` patients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[];
  };

  /**
   * patient findFirstOrThrow
   */
  export type patientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * Filter, which patient to fetch.
     */
    where?: patientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for patients.
     */
    cursor?: patientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` patients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` patients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[];
  };

  /**
   * patient findMany
   */
  export type patientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * Filter, which patients to fetch.
     */
    where?: patientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing patients.
     */
    cursor?: patientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` patients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` patients.
     */
    skip?: number;
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[];
  };

  /**
   * patient create
   */
  export type patientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * The data needed to create a patient.
     */
    data: XOR<patientCreateInput, patientUncheckedCreateInput>;
  };

  /**
   * patient createMany
   */
  export type patientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many patients.
     */
    data: patientCreateManyInput | patientCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * patient update
   */
  export type patientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * The data needed to update a patient.
     */
    data: XOR<patientUpdateInput, patientUncheckedUpdateInput>;
    /**
     * Choose, which patient to update.
     */
    where: patientWhereUniqueInput;
  };

  /**
   * patient updateMany
   */
  export type patientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update patients.
     */
    data: XOR<patientUpdateManyMutationInput, patientUncheckedUpdateManyInput>;
    /**
     * Filter which patients to update
     */
    where?: patientWhereInput;
  };

  /**
   * patient upsert
   */
  export type patientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * The filter to search for the patient to update in case it exists.
     */
    where: patientWhereUniqueInput;
    /**
     * In case the patient found by the `where` argument doesn't exist, create a new patient with this data.
     */
    create: XOR<patientCreateInput, patientUncheckedCreateInput>;
    /**
     * In case the patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<patientUpdateInput, patientUncheckedUpdateInput>;
  };

  /**
   * patient delete
   */
  export type patientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * Filter which patient to delete.
     */
    where: patientWhereUniqueInput;
  };

  /**
   * patient deleteMany
   */
  export type patientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patients to delete
     */
    where?: patientWhereInput;
  };

  /**
   * patient without action
   */
  export type patientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      clinic?: boolean | user$clinicArgs<ExtArgs>;
      healthcare_provider?: boolean | user$healthcare_providerArgs<ExtArgs>;
      insurance_provider?: boolean | user$insurance_providerArgs<ExtArgs>;
      medical_staff?: boolean | user$medical_staffArgs<ExtArgs>;
      patient?: boolean | user$patientArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | user$clinicArgs<ExtArgs>;
    healthcare_provider?: boolean | user$healthcare_providerArgs<ExtArgs>;
    insurance_provider?: boolean | user$insurance_providerArgs<ExtArgs>;
    medical_staff?: boolean | user$medical_staffArgs<ExtArgs>;
    patient?: boolean | user$patientArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      clinic: Prisma.$clinicPayload<ExtArgs>[];
      healthcare_provider: Prisma.$healthcare_providerPayload<ExtArgs>[];
      insurance_provider: Prisma.$insurance_providerPayload<ExtArgs>[];
      medical_staff: Prisma.$medical_staffPayload<ExtArgs>[];
      patient: Prisma.$patientPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
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
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    clinic<T extends user$clinicArgs<ExtArgs> = {}>(
      args?: Subset<T, user$clinicArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findMany'> | Null>;

    healthcare_provider<T extends user$healthcare_providerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$healthcare_providerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$healthcare_providerPayload<ExtArgs>, T, 'findMany'> | Null>;

    insurance_provider<T extends user$insurance_providerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$insurance_providerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'findMany'> | Null>;

    medical_staff<T extends user$medical_staffArgs<ExtArgs> = {}>(
      args?: Subset<T, user$medical_staffArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medical_staffPayload<ExtArgs>, T, 'findMany'> | Null>;

    patient<T extends user$patientArgs<ExtArgs> = {}>(
      args?: Subset<T, user$patientArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.clinic
   */
  export type user$clinicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    where?: clinicWhereInput;
    orderBy?: clinicOrderByWithRelationInput | clinicOrderByWithRelationInput[];
    cursor?: clinicWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[];
  };

  /**
   * user.healthcare_provider
   */
  export type user$healthcare_providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healthcare_provider
     */
    select?: healthcare_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: healthcare_providerInclude<ExtArgs> | null;
    where?: healthcare_providerWhereInput;
    orderBy?: healthcare_providerOrderByWithRelationInput | healthcare_providerOrderByWithRelationInput[];
    cursor?: healthcare_providerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Healthcare_providerScalarFieldEnum | Healthcare_providerScalarFieldEnum[];
  };

  /**
   * user.insurance_provider
   */
  export type user$insurance_providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    where?: insurance_providerWhereInput;
    orderBy?: insurance_providerOrderByWithRelationInput | insurance_providerOrderByWithRelationInput[];
    cursor?: insurance_providerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Insurance_providerScalarFieldEnum | Insurance_providerScalarFieldEnum[];
  };

  /**
   * user.medical_staff
   */
  export type user$medical_staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_staff
     */
    select?: medical_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_staffInclude<ExtArgs> | null;
    where?: medical_staffWhereInput;
    orderBy?: medical_staffOrderByWithRelationInput | medical_staffOrderByWithRelationInput[];
    cursor?: medical_staffWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Medical_staffScalarFieldEnum | Medical_staffScalarFieldEnum[];
  };

  /**
   * user.patient
   */
  export type user$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    where?: patientWhereInput;
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[];
    cursor?: patientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const ClinicScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    opening_hours: 'opening_hours';
    closing_hours: 'closing_hours';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type ClinicScalarFieldEnum = (typeof ClinicScalarFieldEnum)[keyof typeof ClinicScalarFieldEnum];

  export const Healthcare_providerScalarFieldEnum: {
    id: 'id';
    provider_name: 'provider_name';
    provider_type: 'provider_type';
    contact_number: 'contact_number';
    address: 'address';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Healthcare_providerScalarFieldEnum =
    (typeof Healthcare_providerScalarFieldEnum)[keyof typeof Healthcare_providerScalarFieldEnum];

  export const Insurance_providerScalarFieldEnum: {
    id: 'id';
    provider_name: 'provider_name';
    contact_number: 'contact_number';
    address: 'address';
    policy_details: 'policy_details';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Insurance_providerScalarFieldEnum =
    (typeof Insurance_providerScalarFieldEnum)[keyof typeof Insurance_providerScalarFieldEnum];

  export const Medical_staffScalarFieldEnum: {
    id: 'id';
    staff_name: 'staff_name';
    designation: 'designation';
    specialization: 'specialization';
    contact_number: 'contact_number';
    clinic_id: 'clinic_id';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Medical_staffScalarFieldEnum =
    (typeof Medical_staffScalarFieldEnum)[keyof typeof Medical_staffScalarFieldEnum];

  export const PatientScalarFieldEnum: {
    id: 'id';
    patient_name: 'patient_name';
    gender: 'gender';
    date_of_birth: 'date_of_birth';
    contact_number: 'contact_number';
    address: 'address';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Deep Input Types
   */

  export type clinicWhereInput = {
    AND?: clinicWhereInput | clinicWhereInput[];
    OR?: clinicWhereInput[];
    NOT?: clinicWhereInput | clinicWhereInput[];
    id?: UuidFilter<'clinic'> | string;
    description?: StringNullableFilter<'clinic'> | string | null;
    address?: StringNullableFilter<'clinic'> | string | null;
    opening_hours?: StringNullableFilter<'clinic'> | string | null;
    closing_hours?: StringNullableFilter<'clinic'> | string | null;
    name?: StringFilter<'clinic'> | string;
    created_at?: DateTimeFilter<'clinic'> | Date | string;
    updated_at?: DateTimeFilter<'clinic'> | Date | string;
    user_id?: UuidFilter<'clinic'> | string;
    tenant_id?: StringFilter<'clinic'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    medical_staff?: Medical_staffListRelationFilter;
  };

  export type clinicOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    opening_hours?: SortOrderInput | SortOrder;
    closing_hours?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
    medical_staff?: medical_staffOrderByRelationAggregateInput;
  };

  export type clinicWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: clinicWhereInput | clinicWhereInput[];
      OR?: clinicWhereInput[];
      NOT?: clinicWhereInput | clinicWhereInput[];
      description?: StringNullableFilter<'clinic'> | string | null;
      address?: StringNullableFilter<'clinic'> | string | null;
      opening_hours?: StringNullableFilter<'clinic'> | string | null;
      closing_hours?: StringNullableFilter<'clinic'> | string | null;
      name?: StringFilter<'clinic'> | string;
      created_at?: DateTimeFilter<'clinic'> | Date | string;
      updated_at?: DateTimeFilter<'clinic'> | Date | string;
      user_id?: UuidFilter<'clinic'> | string;
      tenant_id?: StringFilter<'clinic'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      medical_staff?: Medical_staffListRelationFilter;
    },
    'id'
  >;

  export type clinicOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    opening_hours?: SortOrderInput | SortOrder;
    closing_hours?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: clinicCountOrderByAggregateInput;
    _max?: clinicMaxOrderByAggregateInput;
    _min?: clinicMinOrderByAggregateInput;
  };

  export type clinicScalarWhereWithAggregatesInput = {
    AND?: clinicScalarWhereWithAggregatesInput | clinicScalarWhereWithAggregatesInput[];
    OR?: clinicScalarWhereWithAggregatesInput[];
    NOT?: clinicScalarWhereWithAggregatesInput | clinicScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'clinic'> | string;
    description?: StringNullableWithAggregatesFilter<'clinic'> | string | null;
    address?: StringNullableWithAggregatesFilter<'clinic'> | string | null;
    opening_hours?: StringNullableWithAggregatesFilter<'clinic'> | string | null;
    closing_hours?: StringNullableWithAggregatesFilter<'clinic'> | string | null;
    name?: StringWithAggregatesFilter<'clinic'> | string;
    created_at?: DateTimeWithAggregatesFilter<'clinic'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'clinic'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'clinic'> | string;
    tenant_id?: StringWithAggregatesFilter<'clinic'> | string;
  };

  export type healthcare_providerWhereInput = {
    AND?: healthcare_providerWhereInput | healthcare_providerWhereInput[];
    OR?: healthcare_providerWhereInput[];
    NOT?: healthcare_providerWhereInput | healthcare_providerWhereInput[];
    id?: UuidFilter<'healthcare_provider'> | string;
    provider_name?: StringFilter<'healthcare_provider'> | string;
    provider_type?: StringNullableFilter<'healthcare_provider'> | string | null;
    contact_number?: StringNullableFilter<'healthcare_provider'> | string | null;
    address?: StringNullableFilter<'healthcare_provider'> | string | null;
    user_id?: UuidFilter<'healthcare_provider'> | string;
    created_at?: DateTimeFilter<'healthcare_provider'> | Date | string;
    updated_at?: DateTimeFilter<'healthcare_provider'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type healthcare_providerOrderByWithRelationInput = {
    id?: SortOrder;
    provider_name?: SortOrder;
    provider_type?: SortOrderInput | SortOrder;
    contact_number?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type healthcare_providerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: healthcare_providerWhereInput | healthcare_providerWhereInput[];
      OR?: healthcare_providerWhereInput[];
      NOT?: healthcare_providerWhereInput | healthcare_providerWhereInput[];
      provider_name?: StringFilter<'healthcare_provider'> | string;
      provider_type?: StringNullableFilter<'healthcare_provider'> | string | null;
      contact_number?: StringNullableFilter<'healthcare_provider'> | string | null;
      address?: StringNullableFilter<'healthcare_provider'> | string | null;
      user_id?: UuidFilter<'healthcare_provider'> | string;
      created_at?: DateTimeFilter<'healthcare_provider'> | Date | string;
      updated_at?: DateTimeFilter<'healthcare_provider'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type healthcare_providerOrderByWithAggregationInput = {
    id?: SortOrder;
    provider_name?: SortOrder;
    provider_type?: SortOrderInput | SortOrder;
    contact_number?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: healthcare_providerCountOrderByAggregateInput;
    _max?: healthcare_providerMaxOrderByAggregateInput;
    _min?: healthcare_providerMinOrderByAggregateInput;
  };

  export type healthcare_providerScalarWhereWithAggregatesInput = {
    AND?: healthcare_providerScalarWhereWithAggregatesInput | healthcare_providerScalarWhereWithAggregatesInput[];
    OR?: healthcare_providerScalarWhereWithAggregatesInput[];
    NOT?: healthcare_providerScalarWhereWithAggregatesInput | healthcare_providerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'healthcare_provider'> | string;
    provider_name?: StringWithAggregatesFilter<'healthcare_provider'> | string;
    provider_type?: StringNullableWithAggregatesFilter<'healthcare_provider'> | string | null;
    contact_number?: StringNullableWithAggregatesFilter<'healthcare_provider'> | string | null;
    address?: StringNullableWithAggregatesFilter<'healthcare_provider'> | string | null;
    user_id?: UuidWithAggregatesFilter<'healthcare_provider'> | string;
    created_at?: DateTimeWithAggregatesFilter<'healthcare_provider'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'healthcare_provider'> | Date | string;
  };

  export type insurance_providerWhereInput = {
    AND?: insurance_providerWhereInput | insurance_providerWhereInput[];
    OR?: insurance_providerWhereInput[];
    NOT?: insurance_providerWhereInput | insurance_providerWhereInput[];
    id?: UuidFilter<'insurance_provider'> | string;
    provider_name?: StringFilter<'insurance_provider'> | string;
    contact_number?: StringNullableFilter<'insurance_provider'> | string | null;
    address?: StringNullableFilter<'insurance_provider'> | string | null;
    policy_details?: StringNullableFilter<'insurance_provider'> | string | null;
    user_id?: UuidFilter<'insurance_provider'> | string;
    created_at?: DateTimeFilter<'insurance_provider'> | Date | string;
    updated_at?: DateTimeFilter<'insurance_provider'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type insurance_providerOrderByWithRelationInput = {
    id?: SortOrder;
    provider_name?: SortOrder;
    contact_number?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    policy_details?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type insurance_providerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: insurance_providerWhereInput | insurance_providerWhereInput[];
      OR?: insurance_providerWhereInput[];
      NOT?: insurance_providerWhereInput | insurance_providerWhereInput[];
      provider_name?: StringFilter<'insurance_provider'> | string;
      contact_number?: StringNullableFilter<'insurance_provider'> | string | null;
      address?: StringNullableFilter<'insurance_provider'> | string | null;
      policy_details?: StringNullableFilter<'insurance_provider'> | string | null;
      user_id?: UuidFilter<'insurance_provider'> | string;
      created_at?: DateTimeFilter<'insurance_provider'> | Date | string;
      updated_at?: DateTimeFilter<'insurance_provider'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type insurance_providerOrderByWithAggregationInput = {
    id?: SortOrder;
    provider_name?: SortOrder;
    contact_number?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    policy_details?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: insurance_providerCountOrderByAggregateInput;
    _max?: insurance_providerMaxOrderByAggregateInput;
    _min?: insurance_providerMinOrderByAggregateInput;
  };

  export type insurance_providerScalarWhereWithAggregatesInput = {
    AND?: insurance_providerScalarWhereWithAggregatesInput | insurance_providerScalarWhereWithAggregatesInput[];
    OR?: insurance_providerScalarWhereWithAggregatesInput[];
    NOT?: insurance_providerScalarWhereWithAggregatesInput | insurance_providerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'insurance_provider'> | string;
    provider_name?: StringWithAggregatesFilter<'insurance_provider'> | string;
    contact_number?: StringNullableWithAggregatesFilter<'insurance_provider'> | string | null;
    address?: StringNullableWithAggregatesFilter<'insurance_provider'> | string | null;
    policy_details?: StringNullableWithAggregatesFilter<'insurance_provider'> | string | null;
    user_id?: UuidWithAggregatesFilter<'insurance_provider'> | string;
    created_at?: DateTimeWithAggregatesFilter<'insurance_provider'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'insurance_provider'> | Date | string;
  };

  export type medical_staffWhereInput = {
    AND?: medical_staffWhereInput | medical_staffWhereInput[];
    OR?: medical_staffWhereInput[];
    NOT?: medical_staffWhereInput | medical_staffWhereInput[];
    id?: UuidFilter<'medical_staff'> | string;
    staff_name?: StringFilter<'medical_staff'> | string;
    designation?: StringNullableFilter<'medical_staff'> | string | null;
    specialization?: StringNullableFilter<'medical_staff'> | string | null;
    contact_number?: StringNullableFilter<'medical_staff'> | string | null;
    clinic_id?: UuidFilter<'medical_staff'> | string;
    user_id?: UuidFilter<'medical_staff'> | string;
    created_at?: DateTimeFilter<'medical_staff'> | Date | string;
    updated_at?: DateTimeFilter<'medical_staff'> | Date | string;
    clinic?: XOR<ClinicRelationFilter, clinicWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type medical_staffOrderByWithRelationInput = {
    id?: SortOrder;
    staff_name?: SortOrder;
    designation?: SortOrderInput | SortOrder;
    specialization?: SortOrderInput | SortOrder;
    contact_number?: SortOrderInput | SortOrder;
    clinic_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    clinic?: clinicOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type medical_staffWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: medical_staffWhereInput | medical_staffWhereInput[];
      OR?: medical_staffWhereInput[];
      NOT?: medical_staffWhereInput | medical_staffWhereInput[];
      staff_name?: StringFilter<'medical_staff'> | string;
      designation?: StringNullableFilter<'medical_staff'> | string | null;
      specialization?: StringNullableFilter<'medical_staff'> | string | null;
      contact_number?: StringNullableFilter<'medical_staff'> | string | null;
      clinic_id?: UuidFilter<'medical_staff'> | string;
      user_id?: UuidFilter<'medical_staff'> | string;
      created_at?: DateTimeFilter<'medical_staff'> | Date | string;
      updated_at?: DateTimeFilter<'medical_staff'> | Date | string;
      clinic?: XOR<ClinicRelationFilter, clinicWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type medical_staffOrderByWithAggregationInput = {
    id?: SortOrder;
    staff_name?: SortOrder;
    designation?: SortOrderInput | SortOrder;
    specialization?: SortOrderInput | SortOrder;
    contact_number?: SortOrderInput | SortOrder;
    clinic_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: medical_staffCountOrderByAggregateInput;
    _max?: medical_staffMaxOrderByAggregateInput;
    _min?: medical_staffMinOrderByAggregateInput;
  };

  export type medical_staffScalarWhereWithAggregatesInput = {
    AND?: medical_staffScalarWhereWithAggregatesInput | medical_staffScalarWhereWithAggregatesInput[];
    OR?: medical_staffScalarWhereWithAggregatesInput[];
    NOT?: medical_staffScalarWhereWithAggregatesInput | medical_staffScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'medical_staff'> | string;
    staff_name?: StringWithAggregatesFilter<'medical_staff'> | string;
    designation?: StringNullableWithAggregatesFilter<'medical_staff'> | string | null;
    specialization?: StringNullableWithAggregatesFilter<'medical_staff'> | string | null;
    contact_number?: StringNullableWithAggregatesFilter<'medical_staff'> | string | null;
    clinic_id?: UuidWithAggregatesFilter<'medical_staff'> | string;
    user_id?: UuidWithAggregatesFilter<'medical_staff'> | string;
    created_at?: DateTimeWithAggregatesFilter<'medical_staff'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'medical_staff'> | Date | string;
  };

  export type patientWhereInput = {
    AND?: patientWhereInput | patientWhereInput[];
    OR?: patientWhereInput[];
    NOT?: patientWhereInput | patientWhereInput[];
    id?: UuidFilter<'patient'> | string;
    patient_name?: StringFilter<'patient'> | string;
    gender?: StringNullableFilter<'patient'> | string | null;
    date_of_birth?: DateTimeNullableFilter<'patient'> | Date | string | null;
    contact_number?: StringNullableFilter<'patient'> | string | null;
    address?: StringNullableFilter<'patient'> | string | null;
    user_id?: UuidFilter<'patient'> | string;
    created_at?: DateTimeFilter<'patient'> | Date | string;
    updated_at?: DateTimeFilter<'patient'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type patientOrderByWithRelationInput = {
    id?: SortOrder;
    patient_name?: SortOrder;
    gender?: SortOrderInput | SortOrder;
    date_of_birth?: SortOrderInput | SortOrder;
    contact_number?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type patientWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: patientWhereInput | patientWhereInput[];
      OR?: patientWhereInput[];
      NOT?: patientWhereInput | patientWhereInput[];
      patient_name?: StringFilter<'patient'> | string;
      gender?: StringNullableFilter<'patient'> | string | null;
      date_of_birth?: DateTimeNullableFilter<'patient'> | Date | string | null;
      contact_number?: StringNullableFilter<'patient'> | string | null;
      address?: StringNullableFilter<'patient'> | string | null;
      user_id?: UuidFilter<'patient'> | string;
      created_at?: DateTimeFilter<'patient'> | Date | string;
      updated_at?: DateTimeFilter<'patient'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type patientOrderByWithAggregationInput = {
    id?: SortOrder;
    patient_name?: SortOrder;
    gender?: SortOrderInput | SortOrder;
    date_of_birth?: SortOrderInput | SortOrder;
    contact_number?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: patientCountOrderByAggregateInput;
    _max?: patientMaxOrderByAggregateInput;
    _min?: patientMinOrderByAggregateInput;
  };

  export type patientScalarWhereWithAggregatesInput = {
    AND?: patientScalarWhereWithAggregatesInput | patientScalarWhereWithAggregatesInput[];
    OR?: patientScalarWhereWithAggregatesInput[];
    NOT?: patientScalarWhereWithAggregatesInput | patientScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'patient'> | string;
    patient_name?: StringWithAggregatesFilter<'patient'> | string;
    gender?: StringNullableWithAggregatesFilter<'patient'> | string | null;
    date_of_birth?: DateTimeNullableWithAggregatesFilter<'patient'> | Date | string | null;
    contact_number?: StringNullableWithAggregatesFilter<'patient'> | string | null;
    address?: StringNullableWithAggregatesFilter<'patient'> | string | null;
    user_id?: UuidWithAggregatesFilter<'patient'> | string;
    created_at?: DateTimeWithAggregatesFilter<'patient'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'patient'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    clinic?: ClinicListRelationFilter;
    healthcare_provider?: Healthcare_providerListRelationFilter;
    insurance_provider?: Insurance_providerListRelationFilter;
    medical_staff?: Medical_staffListRelationFilter;
    patient?: PatientListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    clinic?: clinicOrderByRelationAggregateInput;
    healthcare_provider?: healthcare_providerOrderByRelationAggregateInput;
    insurance_provider?: insurance_providerOrderByRelationAggregateInput;
    medical_staff?: medical_staffOrderByRelationAggregateInput;
    patient?: patientOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      clinic?: ClinicListRelationFilter;
      healthcare_provider?: Healthcare_providerListRelationFilter;
      insurance_provider?: Insurance_providerListRelationFilter;
      medical_staff?: Medical_staffListRelationFilter;
      patient?: PatientListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type clinicCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutClinicInput;
    medical_staff?: medical_staffCreateNestedManyWithoutClinicInput;
  };

  export type clinicUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    medical_staff?: medical_staffUncheckedCreateNestedManyWithoutClinicInput;
  };

  export type clinicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutClinicNestedInput;
    medical_staff?: medical_staffUpdateManyWithoutClinicNestedInput;
  };

  export type clinicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    medical_staff?: medical_staffUncheckedUpdateManyWithoutClinicNestedInput;
  };

  export type clinicCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type clinicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type clinicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type healthcare_providerCreateInput = {
    id?: string;
    provider_name: string;
    provider_type?: string | null;
    contact_number?: string | null;
    address?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutHealthcare_providerInput;
  };

  export type healthcare_providerUncheckedCreateInput = {
    id?: string;
    provider_name: string;
    provider_type?: string | null;
    contact_number?: string | null;
    address?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type healthcare_providerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    provider_name?: StringFieldUpdateOperationsInput | string;
    provider_type?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutHealthcare_providerNestedInput;
  };

  export type healthcare_providerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    provider_name?: StringFieldUpdateOperationsInput | string;
    provider_type?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type healthcare_providerCreateManyInput = {
    id?: string;
    provider_name: string;
    provider_type?: string | null;
    contact_number?: string | null;
    address?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type healthcare_providerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    provider_name?: StringFieldUpdateOperationsInput | string;
    provider_type?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type healthcare_providerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    provider_name?: StringFieldUpdateOperationsInput | string;
    provider_type?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type insurance_providerCreateInput = {
    id?: string;
    provider_name: string;
    contact_number?: string | null;
    address?: string | null;
    policy_details?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutInsurance_providerInput;
  };

  export type insurance_providerUncheckedCreateInput = {
    id?: string;
    provider_name: string;
    contact_number?: string | null;
    address?: string | null;
    policy_details?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type insurance_providerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    provider_name?: StringFieldUpdateOperationsInput | string;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    policy_details?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutInsurance_providerNestedInput;
  };

  export type insurance_providerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    provider_name?: StringFieldUpdateOperationsInput | string;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    policy_details?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type insurance_providerCreateManyInput = {
    id?: string;
    provider_name: string;
    contact_number?: string | null;
    address?: string | null;
    policy_details?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type insurance_providerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    provider_name?: StringFieldUpdateOperationsInput | string;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    policy_details?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type insurance_providerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    provider_name?: StringFieldUpdateOperationsInput | string;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    policy_details?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_staffCreateInput = {
    id?: string;
    staff_name: string;
    designation?: string | null;
    specialization?: string | null;
    contact_number?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic: clinicCreateNestedOneWithoutMedical_staffInput;
    user: userCreateNestedOneWithoutMedical_staffInput;
  };

  export type medical_staffUncheckedCreateInput = {
    id?: string;
    staff_name: string;
    designation?: string | null;
    specialization?: string | null;
    contact_number?: string | null;
    clinic_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_staffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    staff_name?: StringFieldUpdateOperationsInput | string;
    designation?: NullableStringFieldUpdateOperationsInput | string | null;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUpdateOneRequiredWithoutMedical_staffNestedInput;
    user?: userUpdateOneRequiredWithoutMedical_staffNestedInput;
  };

  export type medical_staffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    staff_name?: StringFieldUpdateOperationsInput | string;
    designation?: NullableStringFieldUpdateOperationsInput | string | null;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_staffCreateManyInput = {
    id?: string;
    staff_name: string;
    designation?: string | null;
    specialization?: string | null;
    contact_number?: string | null;
    clinic_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_staffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    staff_name?: StringFieldUpdateOperationsInput | string;
    designation?: NullableStringFieldUpdateOperationsInput | string | null;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_staffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    staff_name?: StringFieldUpdateOperationsInput | string;
    designation?: NullableStringFieldUpdateOperationsInput | string | null;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type patientCreateInput = {
    id?: string;
    patient_name: string;
    gender?: string | null;
    date_of_birth?: Date | string | null;
    contact_number?: string | null;
    address?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutPatientInput;
  };

  export type patientUncheckedCreateInput = {
    id?: string;
    patient_name: string;
    gender?: string | null;
    date_of_birth?: Date | string | null;
    contact_number?: string | null;
    address?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type patientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    patient_name?: StringFieldUpdateOperationsInput | string;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutPatientNestedInput;
  };

  export type patientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    patient_name?: StringFieldUpdateOperationsInput | string;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type patientCreateManyInput = {
    id?: string;
    patient_name: string;
    gender?: string | null;
    date_of_birth?: Date | string | null;
    contact_number?: string | null;
    address?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type patientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    patient_name?: StringFieldUpdateOperationsInput | string;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type patientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    patient_name?: StringFieldUpdateOperationsInput | string;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic?: clinicCreateNestedManyWithoutUserInput;
    healthcare_provider?: healthcare_providerCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerCreateNestedManyWithoutUserInput;
    medical_staff?: medical_staffCreateNestedManyWithoutUserInput;
    patient?: patientCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic?: clinicUncheckedCreateNestedManyWithoutUserInput;
    healthcare_provider?: healthcare_providerUncheckedCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerUncheckedCreateNestedManyWithoutUserInput;
    medical_staff?: medical_staffUncheckedCreateNestedManyWithoutUserInput;
    patient?: patientUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUpdateManyWithoutUserNestedInput;
    healthcare_provider?: healthcare_providerUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUpdateManyWithoutUserNestedInput;
    medical_staff?: medical_staffUpdateManyWithoutUserNestedInput;
    patient?: patientUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUncheckedUpdateManyWithoutUserNestedInput;
    healthcare_provider?: healthcare_providerUncheckedUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUncheckedUpdateManyWithoutUserNestedInput;
    medical_staff?: medical_staffUncheckedUpdateManyWithoutUserNestedInput;
    patient?: patientUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type Medical_staffListRelationFilter = {
    every?: medical_staffWhereInput;
    some?: medical_staffWhereInput;
    none?: medical_staffWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type medical_staffOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type clinicCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    opening_hours?: SortOrder;
    closing_hours?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type clinicMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    opening_hours?: SortOrder;
    closing_hours?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type clinicMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    opening_hours?: SortOrder;
    closing_hours?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type healthcare_providerCountOrderByAggregateInput = {
    id?: SortOrder;
    provider_name?: SortOrder;
    provider_type?: SortOrder;
    contact_number?: SortOrder;
    address?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type healthcare_providerMaxOrderByAggregateInput = {
    id?: SortOrder;
    provider_name?: SortOrder;
    provider_type?: SortOrder;
    contact_number?: SortOrder;
    address?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type healthcare_providerMinOrderByAggregateInput = {
    id?: SortOrder;
    provider_name?: SortOrder;
    provider_type?: SortOrder;
    contact_number?: SortOrder;
    address?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type insurance_providerCountOrderByAggregateInput = {
    id?: SortOrder;
    provider_name?: SortOrder;
    contact_number?: SortOrder;
    address?: SortOrder;
    policy_details?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type insurance_providerMaxOrderByAggregateInput = {
    id?: SortOrder;
    provider_name?: SortOrder;
    contact_number?: SortOrder;
    address?: SortOrder;
    policy_details?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type insurance_providerMinOrderByAggregateInput = {
    id?: SortOrder;
    provider_name?: SortOrder;
    contact_number?: SortOrder;
    address?: SortOrder;
    policy_details?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ClinicRelationFilter = {
    is?: clinicWhereInput;
    isNot?: clinicWhereInput;
  };

  export type medical_staffCountOrderByAggregateInput = {
    id?: SortOrder;
    staff_name?: SortOrder;
    designation?: SortOrder;
    specialization?: SortOrder;
    contact_number?: SortOrder;
    clinic_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type medical_staffMaxOrderByAggregateInput = {
    id?: SortOrder;
    staff_name?: SortOrder;
    designation?: SortOrder;
    specialization?: SortOrder;
    contact_number?: SortOrder;
    clinic_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type medical_staffMinOrderByAggregateInput = {
    id?: SortOrder;
    staff_name?: SortOrder;
    designation?: SortOrder;
    specialization?: SortOrder;
    contact_number?: SortOrder;
    clinic_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type patientCountOrderByAggregateInput = {
    id?: SortOrder;
    patient_name?: SortOrder;
    gender?: SortOrder;
    date_of_birth?: SortOrder;
    contact_number?: SortOrder;
    address?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type patientMaxOrderByAggregateInput = {
    id?: SortOrder;
    patient_name?: SortOrder;
    gender?: SortOrder;
    date_of_birth?: SortOrder;
    contact_number?: SortOrder;
    address?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type patientMinOrderByAggregateInput = {
    id?: SortOrder;
    patient_name?: SortOrder;
    gender?: SortOrder;
    date_of_birth?: SortOrder;
    contact_number?: SortOrder;
    address?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type ClinicListRelationFilter = {
    every?: clinicWhereInput;
    some?: clinicWhereInput;
    none?: clinicWhereInput;
  };

  export type Healthcare_providerListRelationFilter = {
    every?: healthcare_providerWhereInput;
    some?: healthcare_providerWhereInput;
    none?: healthcare_providerWhereInput;
  };

  export type Insurance_providerListRelationFilter = {
    every?: insurance_providerWhereInput;
    some?: insurance_providerWhereInput;
    none?: insurance_providerWhereInput;
  };

  export type PatientListRelationFilter = {
    every?: patientWhereInput;
    some?: patientWhereInput;
    none?: patientWhereInput;
  };

  export type clinicOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type healthcare_providerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type insurance_providerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type patientOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCreateNestedOneWithoutClinicInput = {
    create?: XOR<userCreateWithoutClinicInput, userUncheckedCreateWithoutClinicInput>;
    connectOrCreate?: userCreateOrConnectWithoutClinicInput;
    connect?: userWhereUniqueInput;
  };

  export type medical_staffCreateNestedManyWithoutClinicInput = {
    create?:
      | XOR<medical_staffCreateWithoutClinicInput, medical_staffUncheckedCreateWithoutClinicInput>
      | medical_staffCreateWithoutClinicInput[]
      | medical_staffUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: medical_staffCreateOrConnectWithoutClinicInput | medical_staffCreateOrConnectWithoutClinicInput[];
    createMany?: medical_staffCreateManyClinicInputEnvelope;
    connect?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
  };

  export type medical_staffUncheckedCreateNestedManyWithoutClinicInput = {
    create?:
      | XOR<medical_staffCreateWithoutClinicInput, medical_staffUncheckedCreateWithoutClinicInput>
      | medical_staffCreateWithoutClinicInput[]
      | medical_staffUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: medical_staffCreateOrConnectWithoutClinicInput | medical_staffCreateOrConnectWithoutClinicInput[];
    createMany?: medical_staffCreateManyClinicInputEnvelope;
    connect?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutClinicNestedInput = {
    create?: XOR<userCreateWithoutClinicInput, userUncheckedCreateWithoutClinicInput>;
    connectOrCreate?: userCreateOrConnectWithoutClinicInput;
    upsert?: userUpsertWithoutClinicInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutClinicInput, userUpdateWithoutClinicInput>,
      userUncheckedUpdateWithoutClinicInput
    >;
  };

  export type medical_staffUpdateManyWithoutClinicNestedInput = {
    create?:
      | XOR<medical_staffCreateWithoutClinicInput, medical_staffUncheckedCreateWithoutClinicInput>
      | medical_staffCreateWithoutClinicInput[]
      | medical_staffUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: medical_staffCreateOrConnectWithoutClinicInput | medical_staffCreateOrConnectWithoutClinicInput[];
    upsert?:
      | medical_staffUpsertWithWhereUniqueWithoutClinicInput
      | medical_staffUpsertWithWhereUniqueWithoutClinicInput[];
    createMany?: medical_staffCreateManyClinicInputEnvelope;
    set?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    disconnect?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    delete?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    connect?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    update?:
      | medical_staffUpdateWithWhereUniqueWithoutClinicInput
      | medical_staffUpdateWithWhereUniqueWithoutClinicInput[];
    updateMany?:
      | medical_staffUpdateManyWithWhereWithoutClinicInput
      | medical_staffUpdateManyWithWhereWithoutClinicInput[];
    deleteMany?: medical_staffScalarWhereInput | medical_staffScalarWhereInput[];
  };

  export type medical_staffUncheckedUpdateManyWithoutClinicNestedInput = {
    create?:
      | XOR<medical_staffCreateWithoutClinicInput, medical_staffUncheckedCreateWithoutClinicInput>
      | medical_staffCreateWithoutClinicInput[]
      | medical_staffUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: medical_staffCreateOrConnectWithoutClinicInput | medical_staffCreateOrConnectWithoutClinicInput[];
    upsert?:
      | medical_staffUpsertWithWhereUniqueWithoutClinicInput
      | medical_staffUpsertWithWhereUniqueWithoutClinicInput[];
    createMany?: medical_staffCreateManyClinicInputEnvelope;
    set?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    disconnect?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    delete?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    connect?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    update?:
      | medical_staffUpdateWithWhereUniqueWithoutClinicInput
      | medical_staffUpdateWithWhereUniqueWithoutClinicInput[];
    updateMany?:
      | medical_staffUpdateManyWithWhereWithoutClinicInput
      | medical_staffUpdateManyWithWhereWithoutClinicInput[];
    deleteMany?: medical_staffScalarWhereInput | medical_staffScalarWhereInput[];
  };

  export type userCreateNestedOneWithoutHealthcare_providerInput = {
    create?: XOR<userCreateWithoutHealthcare_providerInput, userUncheckedCreateWithoutHealthcare_providerInput>;
    connectOrCreate?: userCreateOrConnectWithoutHealthcare_providerInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutHealthcare_providerNestedInput = {
    create?: XOR<userCreateWithoutHealthcare_providerInput, userUncheckedCreateWithoutHealthcare_providerInput>;
    connectOrCreate?: userCreateOrConnectWithoutHealthcare_providerInput;
    upsert?: userUpsertWithoutHealthcare_providerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutHealthcare_providerInput, userUpdateWithoutHealthcare_providerInput>,
      userUncheckedUpdateWithoutHealthcare_providerInput
    >;
  };

  export type userCreateNestedOneWithoutInsurance_providerInput = {
    create?: XOR<userCreateWithoutInsurance_providerInput, userUncheckedCreateWithoutInsurance_providerInput>;
    connectOrCreate?: userCreateOrConnectWithoutInsurance_providerInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutInsurance_providerNestedInput = {
    create?: XOR<userCreateWithoutInsurance_providerInput, userUncheckedCreateWithoutInsurance_providerInput>;
    connectOrCreate?: userCreateOrConnectWithoutInsurance_providerInput;
    upsert?: userUpsertWithoutInsurance_providerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutInsurance_providerInput, userUpdateWithoutInsurance_providerInput>,
      userUncheckedUpdateWithoutInsurance_providerInput
    >;
  };

  export type clinicCreateNestedOneWithoutMedical_staffInput = {
    create?: XOR<clinicCreateWithoutMedical_staffInput, clinicUncheckedCreateWithoutMedical_staffInput>;
    connectOrCreate?: clinicCreateOrConnectWithoutMedical_staffInput;
    connect?: clinicWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutMedical_staffInput = {
    create?: XOR<userCreateWithoutMedical_staffInput, userUncheckedCreateWithoutMedical_staffInput>;
    connectOrCreate?: userCreateOrConnectWithoutMedical_staffInput;
    connect?: userWhereUniqueInput;
  };

  export type clinicUpdateOneRequiredWithoutMedical_staffNestedInput = {
    create?: XOR<clinicCreateWithoutMedical_staffInput, clinicUncheckedCreateWithoutMedical_staffInput>;
    connectOrCreate?: clinicCreateOrConnectWithoutMedical_staffInput;
    upsert?: clinicUpsertWithoutMedical_staffInput;
    connect?: clinicWhereUniqueInput;
    update?: XOR<
      XOR<clinicUpdateToOneWithWhereWithoutMedical_staffInput, clinicUpdateWithoutMedical_staffInput>,
      clinicUncheckedUpdateWithoutMedical_staffInput
    >;
  };

  export type userUpdateOneRequiredWithoutMedical_staffNestedInput = {
    create?: XOR<userCreateWithoutMedical_staffInput, userUncheckedCreateWithoutMedical_staffInput>;
    connectOrCreate?: userCreateOrConnectWithoutMedical_staffInput;
    upsert?: userUpsertWithoutMedical_staffInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutMedical_staffInput, userUpdateWithoutMedical_staffInput>,
      userUncheckedUpdateWithoutMedical_staffInput
    >;
  };

  export type userCreateNestedOneWithoutPatientInput = {
    create?: XOR<userCreateWithoutPatientInput, userUncheckedCreateWithoutPatientInput>;
    connectOrCreate?: userCreateOrConnectWithoutPatientInput;
    connect?: userWhereUniqueInput;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type userUpdateOneRequiredWithoutPatientNestedInput = {
    create?: XOR<userCreateWithoutPatientInput, userUncheckedCreateWithoutPatientInput>;
    connectOrCreate?: userCreateOrConnectWithoutPatientInput;
    upsert?: userUpsertWithoutPatientInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutPatientInput, userUpdateWithoutPatientInput>,
      userUncheckedUpdateWithoutPatientInput
    >;
  };

  export type clinicCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<clinicCreateWithoutUserInput, clinicUncheckedCreateWithoutUserInput>
      | clinicCreateWithoutUserInput[]
      | clinicUncheckedCreateWithoutUserInput[];
    connectOrCreate?: clinicCreateOrConnectWithoutUserInput | clinicCreateOrConnectWithoutUserInput[];
    createMany?: clinicCreateManyUserInputEnvelope;
    connect?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
  };

  export type healthcare_providerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<healthcare_providerCreateWithoutUserInput, healthcare_providerUncheckedCreateWithoutUserInput>
      | healthcare_providerCreateWithoutUserInput[]
      | healthcare_providerUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | healthcare_providerCreateOrConnectWithoutUserInput
      | healthcare_providerCreateOrConnectWithoutUserInput[];
    createMany?: healthcare_providerCreateManyUserInputEnvelope;
    connect?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
  };

  export type insurance_providerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<insurance_providerCreateWithoutUserInput, insurance_providerUncheckedCreateWithoutUserInput>
      | insurance_providerCreateWithoutUserInput[]
      | insurance_providerUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | insurance_providerCreateOrConnectWithoutUserInput
      | insurance_providerCreateOrConnectWithoutUserInput[];
    createMany?: insurance_providerCreateManyUserInputEnvelope;
    connect?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
  };

  export type medical_staffCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<medical_staffCreateWithoutUserInput, medical_staffUncheckedCreateWithoutUserInput>
      | medical_staffCreateWithoutUserInput[]
      | medical_staffUncheckedCreateWithoutUserInput[];
    connectOrCreate?: medical_staffCreateOrConnectWithoutUserInput | medical_staffCreateOrConnectWithoutUserInput[];
    createMany?: medical_staffCreateManyUserInputEnvelope;
    connect?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
  };

  export type patientCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<patientCreateWithoutUserInput, patientUncheckedCreateWithoutUserInput>
      | patientCreateWithoutUserInput[]
      | patientUncheckedCreateWithoutUserInput[];
    connectOrCreate?: patientCreateOrConnectWithoutUserInput | patientCreateOrConnectWithoutUserInput[];
    createMany?: patientCreateManyUserInputEnvelope;
    connect?: patientWhereUniqueInput | patientWhereUniqueInput[];
  };

  export type clinicUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<clinicCreateWithoutUserInput, clinicUncheckedCreateWithoutUserInput>
      | clinicCreateWithoutUserInput[]
      | clinicUncheckedCreateWithoutUserInput[];
    connectOrCreate?: clinicCreateOrConnectWithoutUserInput | clinicCreateOrConnectWithoutUserInput[];
    createMany?: clinicCreateManyUserInputEnvelope;
    connect?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
  };

  export type healthcare_providerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<healthcare_providerCreateWithoutUserInput, healthcare_providerUncheckedCreateWithoutUserInput>
      | healthcare_providerCreateWithoutUserInput[]
      | healthcare_providerUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | healthcare_providerCreateOrConnectWithoutUserInput
      | healthcare_providerCreateOrConnectWithoutUserInput[];
    createMany?: healthcare_providerCreateManyUserInputEnvelope;
    connect?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
  };

  export type insurance_providerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<insurance_providerCreateWithoutUserInput, insurance_providerUncheckedCreateWithoutUserInput>
      | insurance_providerCreateWithoutUserInput[]
      | insurance_providerUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | insurance_providerCreateOrConnectWithoutUserInput
      | insurance_providerCreateOrConnectWithoutUserInput[];
    createMany?: insurance_providerCreateManyUserInputEnvelope;
    connect?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
  };

  export type medical_staffUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<medical_staffCreateWithoutUserInput, medical_staffUncheckedCreateWithoutUserInput>
      | medical_staffCreateWithoutUserInput[]
      | medical_staffUncheckedCreateWithoutUserInput[];
    connectOrCreate?: medical_staffCreateOrConnectWithoutUserInput | medical_staffCreateOrConnectWithoutUserInput[];
    createMany?: medical_staffCreateManyUserInputEnvelope;
    connect?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
  };

  export type patientUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<patientCreateWithoutUserInput, patientUncheckedCreateWithoutUserInput>
      | patientCreateWithoutUserInput[]
      | patientUncheckedCreateWithoutUserInput[];
    connectOrCreate?: patientCreateOrConnectWithoutUserInput | patientCreateOrConnectWithoutUserInput[];
    createMany?: patientCreateManyUserInputEnvelope;
    connect?: patientWhereUniqueInput | patientWhereUniqueInput[];
  };

  export type clinicUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<clinicCreateWithoutUserInput, clinicUncheckedCreateWithoutUserInput>
      | clinicCreateWithoutUserInput[]
      | clinicUncheckedCreateWithoutUserInput[];
    connectOrCreate?: clinicCreateOrConnectWithoutUserInput | clinicCreateOrConnectWithoutUserInput[];
    upsert?: clinicUpsertWithWhereUniqueWithoutUserInput | clinicUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: clinicCreateManyUserInputEnvelope;
    set?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
    disconnect?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
    delete?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
    connect?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
    update?: clinicUpdateWithWhereUniqueWithoutUserInput | clinicUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: clinicUpdateManyWithWhereWithoutUserInput | clinicUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: clinicScalarWhereInput | clinicScalarWhereInput[];
  };

  export type healthcare_providerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<healthcare_providerCreateWithoutUserInput, healthcare_providerUncheckedCreateWithoutUserInput>
      | healthcare_providerCreateWithoutUserInput[]
      | healthcare_providerUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | healthcare_providerCreateOrConnectWithoutUserInput
      | healthcare_providerCreateOrConnectWithoutUserInput[];
    upsert?:
      | healthcare_providerUpsertWithWhereUniqueWithoutUserInput
      | healthcare_providerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: healthcare_providerCreateManyUserInputEnvelope;
    set?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
    disconnect?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
    delete?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
    connect?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
    update?:
      | healthcare_providerUpdateWithWhereUniqueWithoutUserInput
      | healthcare_providerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | healthcare_providerUpdateManyWithWhereWithoutUserInput
      | healthcare_providerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: healthcare_providerScalarWhereInput | healthcare_providerScalarWhereInput[];
  };

  export type insurance_providerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<insurance_providerCreateWithoutUserInput, insurance_providerUncheckedCreateWithoutUserInput>
      | insurance_providerCreateWithoutUserInput[]
      | insurance_providerUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | insurance_providerCreateOrConnectWithoutUserInput
      | insurance_providerCreateOrConnectWithoutUserInput[];
    upsert?:
      | insurance_providerUpsertWithWhereUniqueWithoutUserInput
      | insurance_providerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: insurance_providerCreateManyUserInputEnvelope;
    set?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
    disconnect?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
    delete?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
    connect?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
    update?:
      | insurance_providerUpdateWithWhereUniqueWithoutUserInput
      | insurance_providerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | insurance_providerUpdateManyWithWhereWithoutUserInput
      | insurance_providerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: insurance_providerScalarWhereInput | insurance_providerScalarWhereInput[];
  };

  export type medical_staffUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<medical_staffCreateWithoutUserInput, medical_staffUncheckedCreateWithoutUserInput>
      | medical_staffCreateWithoutUserInput[]
      | medical_staffUncheckedCreateWithoutUserInput[];
    connectOrCreate?: medical_staffCreateOrConnectWithoutUserInput | medical_staffCreateOrConnectWithoutUserInput[];
    upsert?: medical_staffUpsertWithWhereUniqueWithoutUserInput | medical_staffUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: medical_staffCreateManyUserInputEnvelope;
    set?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    disconnect?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    delete?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    connect?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    update?: medical_staffUpdateWithWhereUniqueWithoutUserInput | medical_staffUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: medical_staffUpdateManyWithWhereWithoutUserInput | medical_staffUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: medical_staffScalarWhereInput | medical_staffScalarWhereInput[];
  };

  export type patientUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<patientCreateWithoutUserInput, patientUncheckedCreateWithoutUserInput>
      | patientCreateWithoutUserInput[]
      | patientUncheckedCreateWithoutUserInput[];
    connectOrCreate?: patientCreateOrConnectWithoutUserInput | patientCreateOrConnectWithoutUserInput[];
    upsert?: patientUpsertWithWhereUniqueWithoutUserInput | patientUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: patientCreateManyUserInputEnvelope;
    set?: patientWhereUniqueInput | patientWhereUniqueInput[];
    disconnect?: patientWhereUniqueInput | patientWhereUniqueInput[];
    delete?: patientWhereUniqueInput | patientWhereUniqueInput[];
    connect?: patientWhereUniqueInput | patientWhereUniqueInput[];
    update?: patientUpdateWithWhereUniqueWithoutUserInput | patientUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: patientUpdateManyWithWhereWithoutUserInput | patientUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: patientScalarWhereInput | patientScalarWhereInput[];
  };

  export type clinicUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<clinicCreateWithoutUserInput, clinicUncheckedCreateWithoutUserInput>
      | clinicCreateWithoutUserInput[]
      | clinicUncheckedCreateWithoutUserInput[];
    connectOrCreate?: clinicCreateOrConnectWithoutUserInput | clinicCreateOrConnectWithoutUserInput[];
    upsert?: clinicUpsertWithWhereUniqueWithoutUserInput | clinicUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: clinicCreateManyUserInputEnvelope;
    set?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
    disconnect?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
    delete?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
    connect?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
    update?: clinicUpdateWithWhereUniqueWithoutUserInput | clinicUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: clinicUpdateManyWithWhereWithoutUserInput | clinicUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: clinicScalarWhereInput | clinicScalarWhereInput[];
  };

  export type healthcare_providerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<healthcare_providerCreateWithoutUserInput, healthcare_providerUncheckedCreateWithoutUserInput>
      | healthcare_providerCreateWithoutUserInput[]
      | healthcare_providerUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | healthcare_providerCreateOrConnectWithoutUserInput
      | healthcare_providerCreateOrConnectWithoutUserInput[];
    upsert?:
      | healthcare_providerUpsertWithWhereUniqueWithoutUserInput
      | healthcare_providerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: healthcare_providerCreateManyUserInputEnvelope;
    set?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
    disconnect?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
    delete?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
    connect?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
    update?:
      | healthcare_providerUpdateWithWhereUniqueWithoutUserInput
      | healthcare_providerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | healthcare_providerUpdateManyWithWhereWithoutUserInput
      | healthcare_providerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: healthcare_providerScalarWhereInput | healthcare_providerScalarWhereInput[];
  };

  export type insurance_providerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<insurance_providerCreateWithoutUserInput, insurance_providerUncheckedCreateWithoutUserInput>
      | insurance_providerCreateWithoutUserInput[]
      | insurance_providerUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | insurance_providerCreateOrConnectWithoutUserInput
      | insurance_providerCreateOrConnectWithoutUserInput[];
    upsert?:
      | insurance_providerUpsertWithWhereUniqueWithoutUserInput
      | insurance_providerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: insurance_providerCreateManyUserInputEnvelope;
    set?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
    disconnect?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
    delete?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
    connect?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
    update?:
      | insurance_providerUpdateWithWhereUniqueWithoutUserInput
      | insurance_providerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | insurance_providerUpdateManyWithWhereWithoutUserInput
      | insurance_providerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: insurance_providerScalarWhereInput | insurance_providerScalarWhereInput[];
  };

  export type medical_staffUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<medical_staffCreateWithoutUserInput, medical_staffUncheckedCreateWithoutUserInput>
      | medical_staffCreateWithoutUserInput[]
      | medical_staffUncheckedCreateWithoutUserInput[];
    connectOrCreate?: medical_staffCreateOrConnectWithoutUserInput | medical_staffCreateOrConnectWithoutUserInput[];
    upsert?: medical_staffUpsertWithWhereUniqueWithoutUserInput | medical_staffUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: medical_staffCreateManyUserInputEnvelope;
    set?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    disconnect?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    delete?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    connect?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    update?: medical_staffUpdateWithWhereUniqueWithoutUserInput | medical_staffUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: medical_staffUpdateManyWithWhereWithoutUserInput | medical_staffUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: medical_staffScalarWhereInput | medical_staffScalarWhereInput[];
  };

  export type patientUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<patientCreateWithoutUserInput, patientUncheckedCreateWithoutUserInput>
      | patientCreateWithoutUserInput[]
      | patientUncheckedCreateWithoutUserInput[];
    connectOrCreate?: patientCreateOrConnectWithoutUserInput | patientCreateOrConnectWithoutUserInput[];
    upsert?: patientUpsertWithWhereUniqueWithoutUserInput | patientUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: patientCreateManyUserInputEnvelope;
    set?: patientWhereUniqueInput | patientWhereUniqueInput[];
    disconnect?: patientWhereUniqueInput | patientWhereUniqueInput[];
    delete?: patientWhereUniqueInput | patientWhereUniqueInput[];
    connect?: patientWhereUniqueInput | patientWhereUniqueInput[];
    update?: patientUpdateWithWhereUniqueWithoutUserInput | patientUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: patientUpdateManyWithWhereWithoutUserInput | patientUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: patientScalarWhereInput | patientScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type userCreateWithoutClinicInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    healthcare_provider?: healthcare_providerCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerCreateNestedManyWithoutUserInput;
    medical_staff?: medical_staffCreateNestedManyWithoutUserInput;
    patient?: patientCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutClinicInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    healthcare_provider?: healthcare_providerUncheckedCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerUncheckedCreateNestedManyWithoutUserInput;
    medical_staff?: medical_staffUncheckedCreateNestedManyWithoutUserInput;
    patient?: patientUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutClinicInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutClinicInput, userUncheckedCreateWithoutClinicInput>;
  };

  export type medical_staffCreateWithoutClinicInput = {
    id?: string;
    staff_name: string;
    designation?: string | null;
    specialization?: string | null;
    contact_number?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutMedical_staffInput;
  };

  export type medical_staffUncheckedCreateWithoutClinicInput = {
    id?: string;
    staff_name: string;
    designation?: string | null;
    specialization?: string | null;
    contact_number?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_staffCreateOrConnectWithoutClinicInput = {
    where: medical_staffWhereUniqueInput;
    create: XOR<medical_staffCreateWithoutClinicInput, medical_staffUncheckedCreateWithoutClinicInput>;
  };

  export type medical_staffCreateManyClinicInputEnvelope = {
    data: medical_staffCreateManyClinicInput | medical_staffCreateManyClinicInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutClinicInput = {
    update: XOR<userUpdateWithoutClinicInput, userUncheckedUpdateWithoutClinicInput>;
    create: XOR<userCreateWithoutClinicInput, userUncheckedCreateWithoutClinicInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutClinicInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutClinicInput, userUncheckedUpdateWithoutClinicInput>;
  };

  export type userUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    healthcare_provider?: healthcare_providerUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUpdateManyWithoutUserNestedInput;
    medical_staff?: medical_staffUpdateManyWithoutUserNestedInput;
    patient?: patientUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    healthcare_provider?: healthcare_providerUncheckedUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUncheckedUpdateManyWithoutUserNestedInput;
    medical_staff?: medical_staffUncheckedUpdateManyWithoutUserNestedInput;
    patient?: patientUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type medical_staffUpsertWithWhereUniqueWithoutClinicInput = {
    where: medical_staffWhereUniqueInput;
    update: XOR<medical_staffUpdateWithoutClinicInput, medical_staffUncheckedUpdateWithoutClinicInput>;
    create: XOR<medical_staffCreateWithoutClinicInput, medical_staffUncheckedCreateWithoutClinicInput>;
  };

  export type medical_staffUpdateWithWhereUniqueWithoutClinicInput = {
    where: medical_staffWhereUniqueInput;
    data: XOR<medical_staffUpdateWithoutClinicInput, medical_staffUncheckedUpdateWithoutClinicInput>;
  };

  export type medical_staffUpdateManyWithWhereWithoutClinicInput = {
    where: medical_staffScalarWhereInput;
    data: XOR<medical_staffUpdateManyMutationInput, medical_staffUncheckedUpdateManyWithoutClinicInput>;
  };

  export type medical_staffScalarWhereInput = {
    AND?: medical_staffScalarWhereInput | medical_staffScalarWhereInput[];
    OR?: medical_staffScalarWhereInput[];
    NOT?: medical_staffScalarWhereInput | medical_staffScalarWhereInput[];
    id?: UuidFilter<'medical_staff'> | string;
    staff_name?: StringFilter<'medical_staff'> | string;
    designation?: StringNullableFilter<'medical_staff'> | string | null;
    specialization?: StringNullableFilter<'medical_staff'> | string | null;
    contact_number?: StringNullableFilter<'medical_staff'> | string | null;
    clinic_id?: UuidFilter<'medical_staff'> | string;
    user_id?: UuidFilter<'medical_staff'> | string;
    created_at?: DateTimeFilter<'medical_staff'> | Date | string;
    updated_at?: DateTimeFilter<'medical_staff'> | Date | string;
  };

  export type userCreateWithoutHealthcare_providerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic?: clinicCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerCreateNestedManyWithoutUserInput;
    medical_staff?: medical_staffCreateNestedManyWithoutUserInput;
    patient?: patientCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutHealthcare_providerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic?: clinicUncheckedCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerUncheckedCreateNestedManyWithoutUserInput;
    medical_staff?: medical_staffUncheckedCreateNestedManyWithoutUserInput;
    patient?: patientUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutHealthcare_providerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutHealthcare_providerInput, userUncheckedCreateWithoutHealthcare_providerInput>;
  };

  export type userUpsertWithoutHealthcare_providerInput = {
    update: XOR<userUpdateWithoutHealthcare_providerInput, userUncheckedUpdateWithoutHealthcare_providerInput>;
    create: XOR<userCreateWithoutHealthcare_providerInput, userUncheckedCreateWithoutHealthcare_providerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutHealthcare_providerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutHealthcare_providerInput, userUncheckedUpdateWithoutHealthcare_providerInput>;
  };

  export type userUpdateWithoutHealthcare_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUpdateManyWithoutUserNestedInput;
    medical_staff?: medical_staffUpdateManyWithoutUserNestedInput;
    patient?: patientUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutHealthcare_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUncheckedUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUncheckedUpdateManyWithoutUserNestedInput;
    medical_staff?: medical_staffUncheckedUpdateManyWithoutUserNestedInput;
    patient?: patientUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutInsurance_providerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic?: clinicCreateNestedManyWithoutUserInput;
    healthcare_provider?: healthcare_providerCreateNestedManyWithoutUserInput;
    medical_staff?: medical_staffCreateNestedManyWithoutUserInput;
    patient?: patientCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutInsurance_providerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic?: clinicUncheckedCreateNestedManyWithoutUserInput;
    healthcare_provider?: healthcare_providerUncheckedCreateNestedManyWithoutUserInput;
    medical_staff?: medical_staffUncheckedCreateNestedManyWithoutUserInput;
    patient?: patientUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutInsurance_providerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutInsurance_providerInput, userUncheckedCreateWithoutInsurance_providerInput>;
  };

  export type userUpsertWithoutInsurance_providerInput = {
    update: XOR<userUpdateWithoutInsurance_providerInput, userUncheckedUpdateWithoutInsurance_providerInput>;
    create: XOR<userCreateWithoutInsurance_providerInput, userUncheckedCreateWithoutInsurance_providerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutInsurance_providerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutInsurance_providerInput, userUncheckedUpdateWithoutInsurance_providerInput>;
  };

  export type userUpdateWithoutInsurance_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUpdateManyWithoutUserNestedInput;
    healthcare_provider?: healthcare_providerUpdateManyWithoutUserNestedInput;
    medical_staff?: medical_staffUpdateManyWithoutUserNestedInput;
    patient?: patientUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutInsurance_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUncheckedUpdateManyWithoutUserNestedInput;
    healthcare_provider?: healthcare_providerUncheckedUpdateManyWithoutUserNestedInput;
    medical_staff?: medical_staffUncheckedUpdateManyWithoutUserNestedInput;
    patient?: patientUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type clinicCreateWithoutMedical_staffInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutClinicInput;
  };

  export type clinicUncheckedCreateWithoutMedical_staffInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type clinicCreateOrConnectWithoutMedical_staffInput = {
    where: clinicWhereUniqueInput;
    create: XOR<clinicCreateWithoutMedical_staffInput, clinicUncheckedCreateWithoutMedical_staffInput>;
  };

  export type userCreateWithoutMedical_staffInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic?: clinicCreateNestedManyWithoutUserInput;
    healthcare_provider?: healthcare_providerCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerCreateNestedManyWithoutUserInput;
    patient?: patientCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutMedical_staffInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic?: clinicUncheckedCreateNestedManyWithoutUserInput;
    healthcare_provider?: healthcare_providerUncheckedCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerUncheckedCreateNestedManyWithoutUserInput;
    patient?: patientUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutMedical_staffInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutMedical_staffInput, userUncheckedCreateWithoutMedical_staffInput>;
  };

  export type clinicUpsertWithoutMedical_staffInput = {
    update: XOR<clinicUpdateWithoutMedical_staffInput, clinicUncheckedUpdateWithoutMedical_staffInput>;
    create: XOR<clinicCreateWithoutMedical_staffInput, clinicUncheckedCreateWithoutMedical_staffInput>;
    where?: clinicWhereInput;
  };

  export type clinicUpdateToOneWithWhereWithoutMedical_staffInput = {
    where?: clinicWhereInput;
    data: XOR<clinicUpdateWithoutMedical_staffInput, clinicUncheckedUpdateWithoutMedical_staffInput>;
  };

  export type clinicUpdateWithoutMedical_staffInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutClinicNestedInput;
  };

  export type clinicUncheckedUpdateWithoutMedical_staffInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type userUpsertWithoutMedical_staffInput = {
    update: XOR<userUpdateWithoutMedical_staffInput, userUncheckedUpdateWithoutMedical_staffInput>;
    create: XOR<userCreateWithoutMedical_staffInput, userUncheckedCreateWithoutMedical_staffInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutMedical_staffInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutMedical_staffInput, userUncheckedUpdateWithoutMedical_staffInput>;
  };

  export type userUpdateWithoutMedical_staffInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUpdateManyWithoutUserNestedInput;
    healthcare_provider?: healthcare_providerUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUpdateManyWithoutUserNestedInput;
    patient?: patientUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutMedical_staffInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUncheckedUpdateManyWithoutUserNestedInput;
    healthcare_provider?: healthcare_providerUncheckedUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUncheckedUpdateManyWithoutUserNestedInput;
    patient?: patientUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutPatientInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic?: clinicCreateNestedManyWithoutUserInput;
    healthcare_provider?: healthcare_providerCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerCreateNestedManyWithoutUserInput;
    medical_staff?: medical_staffCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutPatientInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic?: clinicUncheckedCreateNestedManyWithoutUserInput;
    healthcare_provider?: healthcare_providerUncheckedCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerUncheckedCreateNestedManyWithoutUserInput;
    medical_staff?: medical_staffUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutPatientInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutPatientInput, userUncheckedCreateWithoutPatientInput>;
  };

  export type userUpsertWithoutPatientInput = {
    update: XOR<userUpdateWithoutPatientInput, userUncheckedUpdateWithoutPatientInput>;
    create: XOR<userCreateWithoutPatientInput, userUncheckedCreateWithoutPatientInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutPatientInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutPatientInput, userUncheckedUpdateWithoutPatientInput>;
  };

  export type userUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUpdateManyWithoutUserNestedInput;
    healthcare_provider?: healthcare_providerUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUpdateManyWithoutUserNestedInput;
    medical_staff?: medical_staffUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUncheckedUpdateManyWithoutUserNestedInput;
    healthcare_provider?: healthcare_providerUncheckedUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUncheckedUpdateManyWithoutUserNestedInput;
    medical_staff?: medical_staffUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type clinicCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    medical_staff?: medical_staffCreateNestedManyWithoutClinicInput;
  };

  export type clinicUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    medical_staff?: medical_staffUncheckedCreateNestedManyWithoutClinicInput;
  };

  export type clinicCreateOrConnectWithoutUserInput = {
    where: clinicWhereUniqueInput;
    create: XOR<clinicCreateWithoutUserInput, clinicUncheckedCreateWithoutUserInput>;
  };

  export type clinicCreateManyUserInputEnvelope = {
    data: clinicCreateManyUserInput | clinicCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type healthcare_providerCreateWithoutUserInput = {
    id?: string;
    provider_name: string;
    provider_type?: string | null;
    contact_number?: string | null;
    address?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type healthcare_providerUncheckedCreateWithoutUserInput = {
    id?: string;
    provider_name: string;
    provider_type?: string | null;
    contact_number?: string | null;
    address?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type healthcare_providerCreateOrConnectWithoutUserInput = {
    where: healthcare_providerWhereUniqueInput;
    create: XOR<healthcare_providerCreateWithoutUserInput, healthcare_providerUncheckedCreateWithoutUserInput>;
  };

  export type healthcare_providerCreateManyUserInputEnvelope = {
    data: healthcare_providerCreateManyUserInput | healthcare_providerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type insurance_providerCreateWithoutUserInput = {
    id?: string;
    provider_name: string;
    contact_number?: string | null;
    address?: string | null;
    policy_details?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type insurance_providerUncheckedCreateWithoutUserInput = {
    id?: string;
    provider_name: string;
    contact_number?: string | null;
    address?: string | null;
    policy_details?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type insurance_providerCreateOrConnectWithoutUserInput = {
    where: insurance_providerWhereUniqueInput;
    create: XOR<insurance_providerCreateWithoutUserInput, insurance_providerUncheckedCreateWithoutUserInput>;
  };

  export type insurance_providerCreateManyUserInputEnvelope = {
    data: insurance_providerCreateManyUserInput | insurance_providerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type medical_staffCreateWithoutUserInput = {
    id?: string;
    staff_name: string;
    designation?: string | null;
    specialization?: string | null;
    contact_number?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic: clinicCreateNestedOneWithoutMedical_staffInput;
  };

  export type medical_staffUncheckedCreateWithoutUserInput = {
    id?: string;
    staff_name: string;
    designation?: string | null;
    specialization?: string | null;
    contact_number?: string | null;
    clinic_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_staffCreateOrConnectWithoutUserInput = {
    where: medical_staffWhereUniqueInput;
    create: XOR<medical_staffCreateWithoutUserInput, medical_staffUncheckedCreateWithoutUserInput>;
  };

  export type medical_staffCreateManyUserInputEnvelope = {
    data: medical_staffCreateManyUserInput | medical_staffCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type patientCreateWithoutUserInput = {
    id?: string;
    patient_name: string;
    gender?: string | null;
    date_of_birth?: Date | string | null;
    contact_number?: string | null;
    address?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type patientUncheckedCreateWithoutUserInput = {
    id?: string;
    patient_name: string;
    gender?: string | null;
    date_of_birth?: Date | string | null;
    contact_number?: string | null;
    address?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type patientCreateOrConnectWithoutUserInput = {
    where: patientWhereUniqueInput;
    create: XOR<patientCreateWithoutUserInput, patientUncheckedCreateWithoutUserInput>;
  };

  export type patientCreateManyUserInputEnvelope = {
    data: patientCreateManyUserInput | patientCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type clinicUpsertWithWhereUniqueWithoutUserInput = {
    where: clinicWhereUniqueInput;
    update: XOR<clinicUpdateWithoutUserInput, clinicUncheckedUpdateWithoutUserInput>;
    create: XOR<clinicCreateWithoutUserInput, clinicUncheckedCreateWithoutUserInput>;
  };

  export type clinicUpdateWithWhereUniqueWithoutUserInput = {
    where: clinicWhereUniqueInput;
    data: XOR<clinicUpdateWithoutUserInput, clinicUncheckedUpdateWithoutUserInput>;
  };

  export type clinicUpdateManyWithWhereWithoutUserInput = {
    where: clinicScalarWhereInput;
    data: XOR<clinicUpdateManyMutationInput, clinicUncheckedUpdateManyWithoutUserInput>;
  };

  export type clinicScalarWhereInput = {
    AND?: clinicScalarWhereInput | clinicScalarWhereInput[];
    OR?: clinicScalarWhereInput[];
    NOT?: clinicScalarWhereInput | clinicScalarWhereInput[];
    id?: UuidFilter<'clinic'> | string;
    description?: StringNullableFilter<'clinic'> | string | null;
    address?: StringNullableFilter<'clinic'> | string | null;
    opening_hours?: StringNullableFilter<'clinic'> | string | null;
    closing_hours?: StringNullableFilter<'clinic'> | string | null;
    name?: StringFilter<'clinic'> | string;
    created_at?: DateTimeFilter<'clinic'> | Date | string;
    updated_at?: DateTimeFilter<'clinic'> | Date | string;
    user_id?: UuidFilter<'clinic'> | string;
    tenant_id?: StringFilter<'clinic'> | string;
  };

  export type healthcare_providerUpsertWithWhereUniqueWithoutUserInput = {
    where: healthcare_providerWhereUniqueInput;
    update: XOR<healthcare_providerUpdateWithoutUserInput, healthcare_providerUncheckedUpdateWithoutUserInput>;
    create: XOR<healthcare_providerCreateWithoutUserInput, healthcare_providerUncheckedCreateWithoutUserInput>;
  };

  export type healthcare_providerUpdateWithWhereUniqueWithoutUserInput = {
    where: healthcare_providerWhereUniqueInput;
    data: XOR<healthcare_providerUpdateWithoutUserInput, healthcare_providerUncheckedUpdateWithoutUserInput>;
  };

  export type healthcare_providerUpdateManyWithWhereWithoutUserInput = {
    where: healthcare_providerScalarWhereInput;
    data: XOR<healthcare_providerUpdateManyMutationInput, healthcare_providerUncheckedUpdateManyWithoutUserInput>;
  };

  export type healthcare_providerScalarWhereInput = {
    AND?: healthcare_providerScalarWhereInput | healthcare_providerScalarWhereInput[];
    OR?: healthcare_providerScalarWhereInput[];
    NOT?: healthcare_providerScalarWhereInput | healthcare_providerScalarWhereInput[];
    id?: UuidFilter<'healthcare_provider'> | string;
    provider_name?: StringFilter<'healthcare_provider'> | string;
    provider_type?: StringNullableFilter<'healthcare_provider'> | string | null;
    contact_number?: StringNullableFilter<'healthcare_provider'> | string | null;
    address?: StringNullableFilter<'healthcare_provider'> | string | null;
    user_id?: UuidFilter<'healthcare_provider'> | string;
    created_at?: DateTimeFilter<'healthcare_provider'> | Date | string;
    updated_at?: DateTimeFilter<'healthcare_provider'> | Date | string;
  };

  export type insurance_providerUpsertWithWhereUniqueWithoutUserInput = {
    where: insurance_providerWhereUniqueInput;
    update: XOR<insurance_providerUpdateWithoutUserInput, insurance_providerUncheckedUpdateWithoutUserInput>;
    create: XOR<insurance_providerCreateWithoutUserInput, insurance_providerUncheckedCreateWithoutUserInput>;
  };

  export type insurance_providerUpdateWithWhereUniqueWithoutUserInput = {
    where: insurance_providerWhereUniqueInput;
    data: XOR<insurance_providerUpdateWithoutUserInput, insurance_providerUncheckedUpdateWithoutUserInput>;
  };

  export type insurance_providerUpdateManyWithWhereWithoutUserInput = {
    where: insurance_providerScalarWhereInput;
    data: XOR<insurance_providerUpdateManyMutationInput, insurance_providerUncheckedUpdateManyWithoutUserInput>;
  };

  export type insurance_providerScalarWhereInput = {
    AND?: insurance_providerScalarWhereInput | insurance_providerScalarWhereInput[];
    OR?: insurance_providerScalarWhereInput[];
    NOT?: insurance_providerScalarWhereInput | insurance_providerScalarWhereInput[];
    id?: UuidFilter<'insurance_provider'> | string;
    provider_name?: StringFilter<'insurance_provider'> | string;
    contact_number?: StringNullableFilter<'insurance_provider'> | string | null;
    address?: StringNullableFilter<'insurance_provider'> | string | null;
    policy_details?: StringNullableFilter<'insurance_provider'> | string | null;
    user_id?: UuidFilter<'insurance_provider'> | string;
    created_at?: DateTimeFilter<'insurance_provider'> | Date | string;
    updated_at?: DateTimeFilter<'insurance_provider'> | Date | string;
  };

  export type medical_staffUpsertWithWhereUniqueWithoutUserInput = {
    where: medical_staffWhereUniqueInput;
    update: XOR<medical_staffUpdateWithoutUserInput, medical_staffUncheckedUpdateWithoutUserInput>;
    create: XOR<medical_staffCreateWithoutUserInput, medical_staffUncheckedCreateWithoutUserInput>;
  };

  export type medical_staffUpdateWithWhereUniqueWithoutUserInput = {
    where: medical_staffWhereUniqueInput;
    data: XOR<medical_staffUpdateWithoutUserInput, medical_staffUncheckedUpdateWithoutUserInput>;
  };

  export type medical_staffUpdateManyWithWhereWithoutUserInput = {
    where: medical_staffScalarWhereInput;
    data: XOR<medical_staffUpdateManyMutationInput, medical_staffUncheckedUpdateManyWithoutUserInput>;
  };

  export type patientUpsertWithWhereUniqueWithoutUserInput = {
    where: patientWhereUniqueInput;
    update: XOR<patientUpdateWithoutUserInput, patientUncheckedUpdateWithoutUserInput>;
    create: XOR<patientCreateWithoutUserInput, patientUncheckedCreateWithoutUserInput>;
  };

  export type patientUpdateWithWhereUniqueWithoutUserInput = {
    where: patientWhereUniqueInput;
    data: XOR<patientUpdateWithoutUserInput, patientUncheckedUpdateWithoutUserInput>;
  };

  export type patientUpdateManyWithWhereWithoutUserInput = {
    where: patientScalarWhereInput;
    data: XOR<patientUpdateManyMutationInput, patientUncheckedUpdateManyWithoutUserInput>;
  };

  export type patientScalarWhereInput = {
    AND?: patientScalarWhereInput | patientScalarWhereInput[];
    OR?: patientScalarWhereInput[];
    NOT?: patientScalarWhereInput | patientScalarWhereInput[];
    id?: UuidFilter<'patient'> | string;
    patient_name?: StringFilter<'patient'> | string;
    gender?: StringNullableFilter<'patient'> | string | null;
    date_of_birth?: DateTimeNullableFilter<'patient'> | Date | string | null;
    contact_number?: StringNullableFilter<'patient'> | string | null;
    address?: StringNullableFilter<'patient'> | string | null;
    user_id?: UuidFilter<'patient'> | string;
    created_at?: DateTimeFilter<'patient'> | Date | string;
    updated_at?: DateTimeFilter<'patient'> | Date | string;
  };

  export type medical_staffCreateManyClinicInput = {
    id?: string;
    staff_name: string;
    designation?: string | null;
    specialization?: string | null;
    contact_number?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_staffUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    staff_name?: StringFieldUpdateOperationsInput | string;
    designation?: NullableStringFieldUpdateOperationsInput | string | null;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutMedical_staffNestedInput;
  };

  export type medical_staffUncheckedUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    staff_name?: StringFieldUpdateOperationsInput | string;
    designation?: NullableStringFieldUpdateOperationsInput | string | null;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_staffUncheckedUpdateManyWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    staff_name?: StringFieldUpdateOperationsInput | string;
    designation?: NullableStringFieldUpdateOperationsInput | string | null;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type clinicCreateManyUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type healthcare_providerCreateManyUserInput = {
    id?: string;
    provider_name: string;
    provider_type?: string | null;
    contact_number?: string | null;
    address?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type insurance_providerCreateManyUserInput = {
    id?: string;
    provider_name: string;
    contact_number?: string | null;
    address?: string | null;
    policy_details?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_staffCreateManyUserInput = {
    id?: string;
    staff_name: string;
    designation?: string | null;
    specialization?: string | null;
    contact_number?: string | null;
    clinic_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type patientCreateManyUserInput = {
    id?: string;
    patient_name: string;
    gender?: string | null;
    date_of_birth?: Date | string | null;
    contact_number?: string | null;
    address?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type clinicUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    medical_staff?: medical_staffUpdateManyWithoutClinicNestedInput;
  };

  export type clinicUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    medical_staff?: medical_staffUncheckedUpdateManyWithoutClinicNestedInput;
  };

  export type clinicUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type healthcare_providerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    provider_name?: StringFieldUpdateOperationsInput | string;
    provider_type?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type healthcare_providerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    provider_name?: StringFieldUpdateOperationsInput | string;
    provider_type?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type healthcare_providerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    provider_name?: StringFieldUpdateOperationsInput | string;
    provider_type?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type insurance_providerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    provider_name?: StringFieldUpdateOperationsInput | string;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    policy_details?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type insurance_providerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    provider_name?: StringFieldUpdateOperationsInput | string;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    policy_details?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type insurance_providerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    provider_name?: StringFieldUpdateOperationsInput | string;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    policy_details?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_staffUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    staff_name?: StringFieldUpdateOperationsInput | string;
    designation?: NullableStringFieldUpdateOperationsInput | string | null;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUpdateOneRequiredWithoutMedical_staffNestedInput;
  };

  export type medical_staffUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    staff_name?: StringFieldUpdateOperationsInput | string;
    designation?: NullableStringFieldUpdateOperationsInput | string | null;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_staffUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    staff_name?: StringFieldUpdateOperationsInput | string;
    designation?: NullableStringFieldUpdateOperationsInput | string | null;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type patientUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    patient_name?: StringFieldUpdateOperationsInput | string;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type patientUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    patient_name?: StringFieldUpdateOperationsInput | string;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type patientUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    patient_name?: StringFieldUpdateOperationsInput | string;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use ClinicCountOutputTypeDefaultArgs instead
   */
  export type ClinicCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ClinicCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use clinicDefaultArgs instead
   */
  export type clinicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    clinicDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use healthcare_providerDefaultArgs instead
   */
  export type healthcare_providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    healthcare_providerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use insurance_providerDefaultArgs instead
   */
  export type insurance_providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    insurance_providerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use medical_staffDefaultArgs instead
   */
  export type medical_staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    medical_staffDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use patientDefaultArgs instead
   */
  export type patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    patientDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
