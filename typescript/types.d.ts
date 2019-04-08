import * as React from 'react';

export type SafeAreaViewForceInsetValue = 'always' | 'never';

export type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export type InferProps<
  T extends React.ComponentType<any>
> = T extends React.ComponentType<infer P> ? P : never;
