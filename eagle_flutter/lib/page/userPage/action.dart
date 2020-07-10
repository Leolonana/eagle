import 'package:fish_redux/fish_redux.dart';

//TODO replace with your own action
enum userAction { action }

class userActionCreator {
  static Action onAction() {
    return const Action(userAction.action);
  }
}
