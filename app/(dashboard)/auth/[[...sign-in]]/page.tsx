const SignInPage = async (props: { params: Promise<{ "sign-in": string }> }) => {
  const params = await props.params;
  console.log(params);
  console.log(params["sign-in"][0]);
  return <div>SignInPage: {params["sign-in"][1]}</div>;
};
export default SignInPage;
