import 'package:fish_redux/fish_redux.dart';

class homeState implements Cloneable<homeState> {

  @override
  homeState clone() {
    return homeState();
  }
}

homeState initState(Map<String, dynamic> args) {
  return homeState();
}
