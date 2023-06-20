import { Loading, Dot, Pointer } from "./Loader.styled";
export const Loader = () => {
  return (
    <Loading>
      Loading
      <Pointer>
        <Dot delay="0s" />
        <Dot delay="0.1s" />
        <Dot delay="0.2s" />
      </Pointer>
    </Loading>
  );
};
