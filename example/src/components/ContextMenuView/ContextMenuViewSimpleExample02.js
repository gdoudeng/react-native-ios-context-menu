import React from 'react';
import { StyleSheet } from 'react-native';

import { ExampleContextMenuItem } from '../ExampleContextMenuItem';


export class ContextMenuViewSimpleExample02 extends React.PureComponent {
  render(){
    return(
      <ExampleContextMenuItem
        {...this.props}
        title={'Simple Example #2'}
        subtitle={'actions w/ icons'}
        desc={'Context menu with 3 actions (text w/ system icon)'}
        // `ContextMenuView` Props
        onPressMenuItem={({nativeEvent}) => alert(`onPressMenuItem nativeEvent: ${JSON.stringify(nativeEvent)}`)}
        onPressMenuPreview={() => alert('onPressMenuPreview')}
        menuConfig={{
          menuTitle: 'ContextMenuViewSimpleExample02',
          menuItems: [{
            actionKey  : 'key-01',
            actionTitle: 'Action #1',
            icon: {
              iconType : 'SYSTEM',
              iconValue: 'folder',
            }
          }, {
            actionKey  : 'key-02'   ,
            actionTitle: 'Action #2',
            icon: {
              iconType : 'SYSTEM',
              iconValue: 'dial.fill',
            }
          }, {
            actionKey  : 'key-03'   ,
            actionTitle: 'Action #3',
            imageValue : 'archivebox.fill',
            icon: {
              iconType : 'SYSTEM',
              iconValue: 'archivebox.fill',
            }
          }],
        }}
      />
    );
  };
};

const styles = StyleSheet.create({
});