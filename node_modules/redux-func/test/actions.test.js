import { should, expect, assert } from 'chai';
import * as Actions from '../src/actions';

describe('makeActionGroup', () => {
  it('simple', () => {
    let group = Actions.makeActionGroup('EX', 'OP1', 'OP2');
    console.log(group);
    expect(group).is.not.null;
    expect(group.OP1).eq('EX.OP1');
    expect(group.OP2).eq('EX.OP2');
  });
  it('viaAjaxAction', () => {
    let group = Actions.makeAjaxAction('EX', 'OP1', 'OP2');
    console.log(group);
    expect(group).is.not.null;
    expect(group.QUERY).eq('EX.QUERY');
    expect(group.SUCCESS).eq('EX.SUCCESS');
    expect(group.ERROR).eq('EX.ERROR');
    expect(group.OP1).eq('EX.OP1');
    expect(group.OP2).eq('EX.OP2');
  });
});

describe('makeAjaxAction', () => {
  let ajax = Actions.makeAjaxAction('AJAX');
  it('defaults', () => {
    console.log(ajax);
    expect(ajax).is.not.null;
    expect(ajax.QUERY).eq('AJAX.QUERY');
    expect(ajax.SUCCESS).eq('AJAX.SUCCESS');
    expect(ajax.ERROR).eq('AJAX.ERROR');
  });
  it('extend', () => {
    let ext = ajax.extend('OP1', 'OP2');
    console.log(ext);
    expect(ext).not.eq(ajax);
  });
  it('bind', () => {
    let bound = ajax.bind({ id: 1 });
    console.log(bound);
    expect(bound).not.eq(ajax);
    expect(bound.id).eq(1);
  });
});

describe('makeTxAction', () => {
  let tx = Actions.makeTxAction('TX');
  it('defaults', () => {
    console.log(tx);
    expect(tx).is.not.null;
    expect(tx.BEGIN).eq('TX.BEGIN');
    expect(tx.UPDATE).eq('TX.UPDATE');
    expect(tx.COMMIT).eq('TX.COMMIT');
    expect(tx.CANCEL).eq('TX.CANCEL');
  });
  it('extend', () => {
    let ext = tx.extend('ABC');
    console.log(ext);
  });
});
