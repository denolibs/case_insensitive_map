// Copyright (c) 2019 Denolibs authors. All rights reserved. MIT license.

export default class CaseInsensitiveMap<K, V> extends Map<K, V> {
  public locale: string | undefined;

  public constructor(iterable: Iterable<readonly [K, V]>);
  public constructor(entries?: readonly (readonly [K, V])[] | null | undefined);
  public constructor(locale: string);
  public constructor(arg?: any) {
    if (typeof arg === 'string') {
      super();
      this.locale = arg;
    } else {
      super(arg);
    }
  }

  public delete(key: K): boolean {
    key = this.toUpper(key);
    return super.delete(key);
  }

  public get(key: K): V | undefined {
    key = this.toUpper(key);
    return super.get(key);
  }

  public has(key: K): boolean {
    key = this.toUpper(key);
    return super.has(key);
  }

  public set(key: K, value: V): this {
    key = this.toUpper(key);
    return super.set(key, value);
  }

  public toUpper(key: K): K {
    if (typeof key === 'string') {
      key = (key.toUpperCase() as unknown) as K;
      // TODO: Not yet supported in Deno:
      // key = (key.toLocaleUpperCase(this.locale) as unknown) as K;
    }
    return key || key;
  }
}
