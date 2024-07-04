type Props = {
  title: string;
  desc: string;
};

function MetaData({ title, desc }: Props) {
  return (
    <>
      <title>{title}</title>
      <meta name="descrtion" content={desc}></meta>
    </>
  );
}

export default MetaData;
