import 'package:fish_redux/fish_redux.dart';

import 'effect.dart';
import 'reducer.dart';
import 'state.dart';
import 'view.dart';

class homePage extends Page<homeState, Map<String, dynamic>> {
  homePage()
      : super(
            initState: initState,
            effect: buildEffect(),
            reducer: buildReducer(),
            view: buildView,
            dependencies: Dependencies<homeState>(
                adapter: null,
                slots: <String, Dependent<homeState>>{
                }),
            middleware: <Middleware<homeState>>[
            ],);

}
