import ColorChangeSwatch from '../shared/color-change-swatch';
import { Dispatch } from 'react';
import { UpdateHexColorAction } from '../../color-reducer';

type RelatedColorPaletteProps = {
  title: string;
  hexColors: string[];
  dispatch: Dispatch<UpdateHexColorAction>;
};

const RelatedColorPalette = ({
  title,
  hexColors,
  dispatch,
}: RelatedColorPaletteProps) => {
  return (
    <section>
      <h3 className="mb-4">{title}</h3>
      <div className="grid grid-cols-3 gap-2">
        {hexColors.map((hexColor) => {
          const updateHexColor = () =>
            dispatch({
              type: 'update-hex-color',
              payload: { hexColor: hexColor },
            });
          return (
            <ColorChangeSwatch
              onClick={updateHexColor}
              key={hexColor}
              hexColor={hexColor}
              className="h-full w-full"
            />
          );
        })}
      </div>
    </section>
  );
};

export default RelatedColorPalette;
