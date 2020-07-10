import 'package:fish_redux/fish_redux.dart';
import 'action.dart';
import 'state.dart';

Effect<homeState> buildEffect() {
  return combineEffects(<Object, Effect<homeState>>{
    homeAction.action: _onAction,
  });
}

void _onAction(Action action, Context<homeState> ctx) {
}
