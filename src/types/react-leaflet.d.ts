import { Icon } from 'leaflet';

declare module 'react-leaflet' {
  interface MapContainerProps {
    center: [number, number];
    zoom: number;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }

  interface TileLayerProps {
    url: string;
    attribution?: string;
  }

  interface MarkerProps {
    position: [number, number];
    icon?: Icon;
  }

  interface PopupProps {
    children?: React.ReactNode;
  }

  export class MapContainer extends React.Component<MapContainerProps> {}
  export class TileLayer extends React.Component<TileLayerProps> {}
  export class Marker extends React.Component<MarkerProps> {}
  export class Popup extends React.Component<PopupProps> {}
}
