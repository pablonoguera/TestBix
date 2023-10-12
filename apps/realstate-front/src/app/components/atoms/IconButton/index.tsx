import { IconButton as ChakraIconButton } from '@chakra-ui/react';

interface IIconButton {
  onClick: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  ariaLabel: string;
  icon: JSX.Element;
  alt: string;
  size: string;
}

function IconButton({
  onClick,
  isDisabled,
  isLoading,
  ariaLabel,
  icon,
  size
}: IIconButton): JSX.Element {
  return (
    <div>
      <ChakraIconButton
        aria-label={ariaLabel}
        isRound={true}
        onClick={onClick}
        disabled={isDisabled}
        isLoading={isLoading}
        icon={icon}
        variant="outline"
        size={size}
      ></ChakraIconButton>
    </div>
  );
}

export default IconButton;
