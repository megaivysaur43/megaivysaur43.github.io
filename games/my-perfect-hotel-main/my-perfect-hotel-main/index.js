/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "portrait";
//-----libs-begin-----
loadLib("libs/min/laya.core.min.js")
loadLib("libs/min/laya.d3.min.js")
loadLib("libs/min/fairygui.min.js")
// loadLib("libs/min/fnsdk.min.js")
loadLib("libs/min/laya.physics3D.min.js")
//-----libs-end-------

loadLib("js/bundle.js");
