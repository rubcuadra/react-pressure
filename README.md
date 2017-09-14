<!-- Name -->
<h1 align="center">
  <a href="https://pressurejs.com/">React-Pressure.js</a>
</h1>

If you want to implement 3D touch on your react component this is the module for you

## Installation & Usage

```npm i --save react-pressure```  

## How to

The project wrapps al the functionalities from Pressure.js into a React High Order component, any component enchanced by this will have *force* and *pressing* in its *props* . The HOC allows you to pass some config options.  

<h4>props:</h4>
<ul>
  <li>force : Contains a number between 0 and 1, it represents the amount of pressure done by the user</li>
  <li>pressing : Contains *true* or *false*, it represents if the user is currently pressing or not the component</li>
</ul>
<h4>Options (Optional):</h4>
<ul>
  <li>debug: true | false</li>
  <li>polyfill: true | false</li>
  <li>polyfillSpeedUp: 0 - 1000</li>
  <li>polyfillSpeedDown: 0</li>
  <li>preventSelect: true</li>
  <li>only: null | "touch" | "mouse" | "pointer"</li>
</ul>

## Debug 
By default is false, if true then the component will print warnings/logs.

## Polyfill Support

Using the "polyfill" keyword, you can disable polyfill support for the element. The polyfill is enabled by default and is useful if the device or browser does not support pressure, it will fall back to using time. For example instead of force from 0 to 1, it counts up from 0 to 1 over the course of one second, as long as you are holding the element. Try some of the examples on the main page on a devices that does not support pressure and see for yourself how it works.

## Polyfill Speed Up

If you are using the polyfill, you can use the "polyfillSpeedUp" speed to determine how fast the polyfill takes to go from 0 to 1. The value is an integer in milliseconds and the default is 1000 (1 second).
These great products are built on Semantic UI React. Add yours [here][22].

## Polyfill Speed Down

If you are using the polyfill, you can use the "polyfillSpeedDown" speed to determine how fast the polyfill takes to go from 1 to 0 when the elemnt is released. The value is an integer in milliseconds and the default is 0 (aka off).

## Device Detection

With Pressure, the third paramater is an optional object of options that can be passed in. The first option is device targeting. Using the "only" keyword, you can define if you want pressure to respond to ONLY touch, ONLY Mouse, or ONLY Pointer events.

	touch: Iphones with 3D touch (6s,7)
	mouse: Mac with Force Touch (Macbook Pro 2016/2017)
	pointer: Wacom Tablets or devices that support Pointer Events

## Prevent Select

Both Mac and iPhones have system wide features that they default to when force clicking on something (ex. defining a word on Mac or "peeking and popping" an image on iOS). Pressure prevents those actions from happening, however if you still want those actions to be possible on "Pressure" elements, you can pass in "preventSelect" as an option.

## Example
If you want to implement 3D touch on your component you can do something like this:

```jsx
import React, { Component } from 'react';
import Pressure from 'react-pressure';

class MyGreatComponent extends Component {
  render() {
    const message = this.props.pressing?"Stop please":"Touch me";
    return (
      <div>
        <h1>This is an awesome component</h1>
		<p>{message}</p>
        <p>The whole component has 3D touch detection</p>
        <p>You are using {this.props.force} force</p>
      </div>
    );
  }
}
//This is the important part
export default Pressure(MyGreatComponent);
```

By default all components have the configuration: 
```jsx
{
  polyfill: true,
  polyfillSpeedUp: 1000,
  polyfillSpeedDown: 1000,
  preventSelect: true,
  only: null
}
```
If you want to add some configurations you can modify the last part from the previous code and write something like this:(You can override some,none or all of the configurations)
```jsx
//Now this changed
const configs = {
  polyfill: false, //Only people with 3D touch
  only: "touch"    //Only Iphones 
}
export default Pressure(MyGreatComponent,configs) ;
```

If you are using react-redux you can do something like:
```jsx
export default connect(mapStateToProps,mapDispatchToProps)( Pressure(MyGreatComponent) );
```

If you have any doubt/recommendation you can write me or any trouble you can create a new thread on the [issues](https://github.com/rubcuadra/react-pressure/issues) area of the repository
#ISSUES:
0.1.2 The latest realese of pressure.js has a weird bug in some Android devices, this new realese of react-pressure has a hotfix while the core code is upgraded, if you don't pass a configuration object then the HOC will try to guess if you are using a mobile phone, if it is de case then it uses the only:"touch", else it continues with the default configurations. 09/12/2017

#LIVE EXAMPLE:

[Pressure Cubes](http://rubcuadra.github.io/pressure-cubes/): React & Three.js videogame that implements 3D touch to avoid cubes
