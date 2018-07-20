class ActionGroup {
  constructor(name, ...ops) {
    this._name = name;
    let prefix = this._name + '.';
    for (let op of ops) {
      this[op] = prefix + op;
    }
  }
  clone() {
    return Object.assign(new ActionGroup(this._name), this);
  }
  extend(...ops) {
    if (ops.length === 0) {
      return this;
    }
    let cloned = this.clone();
    let prefix = this._name + '.';
    for (let op of ops) {
      cloned[op] = prefix + op;
    }
    return cloned;
  }
  bind(params) {
    if (params) {
      let cloned = this.clone();
      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          cloned[key] = params[key];
        }
      }
      return cloned;
    } else {
      return this;
    }
  }
}

export function makeActionGroup(name, ...ops) {
  return new ActionGroup(name, ...ops);
}

export const QUERY   = 'QUERY';
export const SUCCESS = 'SUCCESS';
export const ERROR   = 'ERROR';
export function makeAjaxAction(name, ...ops) {
  return new ActionGroup(name, QUERY, SUCCESS, ERROR, ...ops);
}

export const BEGIN  = 'BEGIN';
export const UPDATE = 'UPDATE';
export const COMMIT = 'COMMIT';
export const CANCEL = 'CANCEL';
export function makeTxAction(name, ...ops) {
  return new ActionGroup(name, BEGIN, UPDATE, COMMIT, CANCEL, ...ops);
}
