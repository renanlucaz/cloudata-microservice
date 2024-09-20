export abstract class LoginRepository {
  abstract login(): Promise<void>;
}
