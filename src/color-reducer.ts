import { rgb } from 'color-convert';

export type UpdateHexColorAction = {
  type: 'update-hex-color';
  payload: {
    hexColor: string;
  };
};

export type UpdateRGBColorAction = {
  type: 'update-rgb-color';
  payload: { rgb: [number, number, number] };
};

type HexColor = `#${string}`;
type RGBString = `rgb(${number},${number}, ${number})`;

type ColorState = {
  hexColor: string;
};

export type AdjustColorActions = UpdateHexColorAction | UpdateRGBColorAction;

export const initialState: ColorState = {
  hexColor: '#11BB33',
};

export const colorReducer = (
  state: ColorState = initialState,
  action: AdjustColorActions,
) => {
  if (action.type === 'update-hex-color') {
    const { hexColor } = action.payload;
    return { ...state, hexColor };
  }
  if (action.type === 'update-rgb-color') {
    const hexColor = '#' + rgb.hex(action.payload.rgb);
    return { ...state, hexColor };
  }

  return state;
};
