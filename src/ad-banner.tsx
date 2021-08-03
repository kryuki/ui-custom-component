import * as React from 'react';
import { IComponentIdProps, IManywho } from './interfaces';

declare const manywho: IManywho;

class AdBanner extends React.Component<IComponentIdProps, any> {
    constructor(props: IComponentIdProps) {
      super(props);
      const model: any = manywho.model.getComponent(this.props.id, this.props.flowKey);
      if (!manywho.utils.isNullOrUndefined(model) && !manywho.utils.isNullOrUndefined(model.attributes)) {
        this.state = model.attributes;
      }
    }

    render() {
      console.log(this.props);
      const content = this.state['data-content'];
      const width = this.state['data-width'];
      const height = this.state['data-height'];
      const orientation = this.state['data-orientation'];
      let style = {};
      if (orientation === 'vertical') {
        style.transform = [{ rotate: '0deg'}];
      } else if (orientation === 'horizontal') {
        style.transform = [{ rotate: '90deg'}];
      }
      if (!manywho.utils.isNullOrUndefined(content)) {
        return <img src={content} style={style}/>;
      } else {
        return <div>None</div>;
      }
    }
}

manywho.component.register('custom-ad-banner', AdBanner);

export default AdBanner;
