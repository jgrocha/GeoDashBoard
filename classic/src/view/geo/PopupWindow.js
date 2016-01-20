/**
 * This class provides the modal Ext.Window support for all Authentication forms.
 * It's layout is structured to center any Authentication dialog within it's center,
 * and provides a backGround image during such operations.
 */
Ext.define('Admin.view.geo.PopupWindow', {
    extend: 'Ext.window.Window',
    xtype: 'popup-window',
    cls: 'geoext-popup-window',
    width: 280,
    height: 120,
    closeAction : 'hide',
    closable: true,
    resizable: false,
    autoShow: false,
    titleAlign: 'center',
    headerPosition: 'bottom',
    frameHeader: false,
    layout: 'fit',
    items: {
        border: false
    }
});
