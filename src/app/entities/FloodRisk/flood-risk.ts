interface FloodRiskProps {
  id: string;
  nivel: string;
  riskDate: Date;
}

export class FloodRisk {
  private props: FloodRiskProps;

  constructor(props: FloodRiskProps) {
    this.props = props;
  }

  get id(): string {
    return this.props.id;
  }

  get nivel(): string {
    return this.props.nivel;
  }

  set nivel(nivel: string) {
    this.props.nivel = nivel;
  }

  get riskDate(): Date {
    return this.props.riskDate;
  }

  set riskDate(riskDate: Date) {
    this.props.riskDate = riskDate;
  }
}
