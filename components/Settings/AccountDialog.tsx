interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AccountDialog(props: Props) {
  const { open } = props;

  if (!open) return null;


}