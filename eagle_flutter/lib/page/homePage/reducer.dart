import 'package:fish_redux/fish_redux.dart';

import 'action.dart';
import 'state.dart';

Reducer<homeState> buildReducer() {
  return asReducer(
    <Object, Reducer<homeState>>{
      homeAction.action: _onAction,
    },
  );
}

homeState _onAction(homeState state, Action action) {
  final homeState newState = state.clone();
  return newState;
}
