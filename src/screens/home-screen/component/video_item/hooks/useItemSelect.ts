//@ts-ignore
import {Video} from '../../../../../interfaces/Video';
import {useSmartPlay} from '../../../../../hooks/useSmartPlay';

export const useItemSelect = ({
  onVideoItemSelect,
  onSmartPlayAction,
}: {
  onVideoItemSelect: Function;
  onSmartPlayAction: Function;
}) => {
  const {callSmartPlay} = useSmartPlay({onSmartPlayAction});

  const onItemSelect = (item: Video) =>
    function () {
      global.console.info('VideoList: onItemSelect ' + item);
      onVideoItemSelect(item);

      callSmartPlay(item);
    };

  return {onItemSelect};
};
