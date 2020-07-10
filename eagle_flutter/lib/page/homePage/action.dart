import 'package:fish_redux/fish_redux.dart';

//TODO replace with your own action
enum homeAction { action }

class homeActionCreator {
  static Action onAction() {
    return const Action(homeAction.action);
  }
}
