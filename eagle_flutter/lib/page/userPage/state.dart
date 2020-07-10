import 'package:fish_redux/fish_redux.dart';

class userState implements Cloneable<userState> {

  @override
  userState clone() {
    return userState();
  }
}

userState initState(Map<String, dynamic> args) {
  return userState();
}
