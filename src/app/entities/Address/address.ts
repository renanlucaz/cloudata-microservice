interface AddressProps {
  id: string;
  uf: string;
  city: string;
  neightborhood: string;
  number: string;
  latitude: number;
  longitude: number;
  street: string;
  createdAt: Date;
}

export class Address {
  private props: AddressProps;

  constructor(props: AddressProps) {
    this.props = props;
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

  public set city(city: string) {
    this.props.city = city;
  }

  public get city() {
    return this.props.city;
  }

  public set neightborhood(neightborhood: string) {
    this.props.neightborhood = neightborhood;
  }

  public get neightborhood() {
    return this.props.neightborhood;
  }

  public set street(street: string) {
    this.props.street = street;
  }

  public get street() {
    return this.props.street;
  }

  public set number(number: string) {
    this.props.number = number;
  }

  public get number() {
    return this.props.number;
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

  public get createdAt() {
    return this.props.createdAt;
  }
}
