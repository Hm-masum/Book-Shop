declare module 'shurjopay' {
  class Shurjopay {
    config(
      root_url: string,
      merchant_username: string,
      merchant_password: string,
      merchant_key_prefix: string,
      return_url: string,
    ): void;
    makePayment(): void;
  }

  export default Shurjopay;
}
