import { Icon } from '@iconify/react';
import locationIcon from '@iconify-icons/mdi/fire-alert';

const LocationMarker = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <Icon icon={locationIcon} className="location-icon" />
    </div>
  );
};

export default LocationMarker;
