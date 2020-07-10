import 'package:fish_redux/fish_redux.dart';

import 'effect.dart';
import 'reducer.dart';
import 'state.dart';
import 'view.dart';

class userPage extends Page<userState, Map<String, dynamic>> {
  userPage()
      : super(
            initState: initState,
            effect: buildEffect(),
            reducer: buildReducer(),
            view: buildView,
            dependencies: Dependencies<userState>(
                adapter: null,
                slots: <String, Dependent<userState>>{
                }),
            middleware: <Middleware<userState>>[
            ],);

}
