interface EnergyStationProps {
  id: string;
  uf: string;
  name: string;
  status: string;
  latitude: number;
  longitude: number;
  altitude: number;
  instalationDate: Date;
}

export class EnergyStation {
  private props: EnergyStationProps;

  constructor(props: EnergyStationProps) {
    this.props = { ...props };
  }

  public get id() {
    return this.props.id;
  }

  public set uf(uf: string) {
    this.props.uf = uf;
  }

  public get uf() {
    return this.props.uf;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name() {
    return this.props.name;
  }

  public set status(status: string) {
    this.props.status = status;
  }

  public get status() {
    return this.props.status;
  }

  public set latitude(latitude: number) {
    this.props.latitude = latitude;
  }

  public get latitude() {
    return this.props.latitude;
  }

  public set longitude(longitude: number) {
    this.props.longitude = longitude;
  }

  public get longitude() {
    return this.props.longitude;
  }

  public set altitude(altitude: number) {
    this.props.altitude = altitude;
  }

  public get altitude() {
    return this.props.altitude;
  }

  public set instalationDate(instalationDate: Date) {
    this.props.instalationDate = instalationDate;
  }

  public get instalationDate() {
    return this.props.instalationDate;
  }
}
