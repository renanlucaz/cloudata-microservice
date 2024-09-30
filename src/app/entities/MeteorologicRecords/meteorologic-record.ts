interface MeteorologicRecordProps {
  id: string;
  rainProb: number;
  maxHumidity: number;
  minHumidity: number;
  minWindSpeed: number;
  maxWindSpeed: number;
  minTemperature: number;
  maxTemperature: number;
  description: string;
  latitude?: number;
  longitude?: number;
  registerType: string;
  registerDate: Date;
  endereco?: any;
}

export class MeteorologicRecord {
  private props: MeteorologicRecordProps;
  constructor(props: MeteorologicRecordProps) {
    this.props = { ...props };
  }

  get id(): string {
    return this.props.id;
  }

  get rainProb(): number {
    return this.props.rainProb;
  }

  get maxHumidity(): number {
    return this.props.maxHumidity;
  }

  get minHumidity(): number {
    return this.props.minHumidity;
  }

  get minWindSpeed(): number {
    return this.props.minWindSpeed;
  }

  get maxWindSpeed(): number {
    return this.props.maxWindSpeed;
  }

  get minTemperature(): number {
    return this.props.minTemperature;
  }

  get maxTemperature(): number {
    return this.props.maxTemperature;
  }

  get description(): string {
    return this.props.description;
  }

  get latitude(): number {
    return this.props.latitude;
  }

  get longitude(): number {
    return this.props.longitude;
  }

  get registerType(): string {
    return this.props.registerType;
  }

  get registerDate(): Date {
    return this.props.registerDate;
  }

  set id(value: string) {
    this.props.id = value;
  }

  set rainProb(value: number) {
    this.props.rainProb = value;
  }

  set maxHumidity(value: number) {
    this.props.maxHumidity = value;
  }

  set minHumidity(value: number) {
    this.props.minHumidity = value;
  }

  set minWindSpeed(value: number) {
    this.props.minWindSpeed = value;
  }

  set maxWindSpeed(value: number) {
    this.props.maxWindSpeed = value;
  }

  set minTemperature(value: number) {
    this.props.minTemperature = value;
  }

  set maxTemperature(value: number) {
    this.props.maxTemperature = value;
  }

  set description(value: string) {
    this.props.description = value;
  }

  set latitude(value: number) {
    this.props.latitude = value;
  }

  set longitude(value: number) {
    this.props.longitude = value;
  }

  set registerType(value: string) {
    this.props.registerType = value;
  }

  set registerDate(value: Date) {
    this.props.registerDate = value;
  }

  get endereco() {
    return this.props.endereco;
  }
}
