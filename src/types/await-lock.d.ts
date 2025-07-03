declare module 'await-lock' {
  export default class AwaitLock {
    constructor();
    acquireAsync(): Promise<void>;
    release(): void;
  }
}
