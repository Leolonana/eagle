import 'package:fish_redux/fish_redux.dart';

import 'action.dart';
import 'state.dart';

Reducer<userState> buildReducer() {
  return asReducer(
    <Object, Reducer<userState>>{
      userAction.action: _onAction,
    },
  );
}

userState _onAction(userState state, Action action) {
  final userState newState = state.clone();
  return newState;
}
