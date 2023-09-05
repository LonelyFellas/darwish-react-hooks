import { Draft } from 'immer';
export type DraftFunction<T> = (draft: Draft<T>) => void;
export type Updater<T> = (arg: T | DraftFunction<T>) => void;
export type ImmerHooks<T> = [T, Updater<T>];
export declare function useImmer<T>(initialValue: T | (() => T)): ImmerHooks<T>;
export default function useImmer<T>(initialValue: T): any[];
