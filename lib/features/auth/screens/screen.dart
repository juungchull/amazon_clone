import 'package:flutter/material.dart';

class AuthScreen extends StatelessWidget {
  const AuthScreen({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(centerTitle: true, title: Text('hello')),
      body: Column(
        children: [
          const Center(
            child: Text('Flutter Demo Home Page'),
          ),
          Builder(builder: (context) {
            return ElevatedButton(
              onPressed: () {},
              child: Text('click'),
            );
          }),
        ],
      ),
    );
  }
}
