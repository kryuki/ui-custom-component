import * as React from 'react';
import './css/basic.css';
import { IManywho } from './interfaces';

declare const manywho: IManywho;

class AdBanner extends React.Component<any> {
    render() {
      if (this.props.attributes) {
        return <div>{this.props.attributes}</div>;
      } else {
        return <div>None</div>;
      }
    }
}

manywho.component.register('custom-ad-banner', AdBanner);

export default AdBanner;
