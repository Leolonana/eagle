import 'package:fish_redux/fish_redux.dart';
import 'action.dart';
import 'state.dart';

Effect<userState> buildEffect() {
  return combineEffects(<Object, Effect<userState>>{
    userAction.action: _onAction,
  });
}

void _onAction(Action action, Context<userState> ctx) {
}
