import { Title } from "@mantine/core";
import { modals } from "@mantine/modals";

type OpenModalProps = {
  text?: React.ReactNode;
  // onCancel: () => void;
  onConfirm: () => void;
};

export const openModal = ({ text, onConfirm }: OpenModalProps) =>
  modals.openConfirmModal({
    centered: true,
    title: (
      <Title order={4} c="gray.7">
        Please confirm your action
      </Title>
    ),
    children: text,
    labels: { confirm: "Confirm", cancel: "Cancel" },
    // onCancel: () => onCancel(),
    onConfirm: () => onConfirm(),
  });
