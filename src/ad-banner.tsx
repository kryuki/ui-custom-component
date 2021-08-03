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
      if (content) {
        return <img src={content}/>;
      } else {
        return <div>None</div>;
      }
    }
}

manywho.component.register('custom-ad-banner', AdBanner);

export default AdBanner;
