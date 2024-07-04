import {
  type DiscordAPIButtonComponentButtonStyleType,
  type DiscordAPIEmoji,
  type DiscordAPIMessageComponentType,
} from '../discord/REST';

export enum Events {
  Debug = 'debug',
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Attachment {}

export interface ButtonComponent {
  type: 2;
  style: DiscordAPIButtonComponentButtonStyleType;
  label?: string;
  emoji?: DiscordAPIEmoji;
  custom_id?: string;
  url?: string;
  disabled?: boolean;
}

export interface StringSelectComponentOption {
  label: string;
  value: string;
  description?: string;
  emoji?: any;
}
export interface StringSelectComponent {
  type: DiscordAPIMessageComponentType.StringSelect;
  custom_id: string;
  disabled?: boolean;
  options: StringSelectComponentOption[];
}

export interface TextInputComponent {
  type: DiscordAPIMessageComponentType.TextInput;
}

export interface UserSelectComponent {
  type: DiscordAPIMessageComponentType.UserSelect;
}

export interface RoleSelectComponent {
  type: DiscordAPIMessageComponentType.RoleSelect;
}

export interface MentionableSelectComponent {
  type: DiscordAPIMessageComponentType.MentionableSelect;
}

export interface ChannelSelectComponent {
  type: DiscordAPIMessageComponentType.ChannelSelect;
}

export interface ActionRowComponent {
  type: DiscordAPIMessageComponentType.ActionRow;
  components: Array<
    | ButtonComponent
    | StringSelectComponent
    | TextInputComponent
    | UserSelectComponent
    | RoleSelectComponent
    | MentionableSelectComponent
    | ChannelSelectComponent
  >;
}

export interface MessageResponseOptions {
  content?: string;
  embeds?: Embed[];
  attachments?: Attachment[];
  fetchReply?: boolean;
  components?: ActionRowComponent[];
  ephemeral?: boolean;
}

export interface MessageResponseEditOptions {
  maintainDefaults: true;
}

export interface EmbedFooter {
  text: string;
  iconURL?: string;
}

export interface EmbedImage {
  url: string;
  height?: number;
  width?: number;
}

export interface EmbedThumbnail {
  url: string;
  height?: number;
  width?: number;
}

export interface EmbedVideo {
  url?: string;
  height?: number;
  width?: number;
}

export interface EmbedProvider {
  name?: string;
  url?: string;
}

export interface EmbedAuthor {
  name: string;
  url?: string;
  iconURL: string | null;
}

export interface EmbedField {
  name: string;
  value: string;
  inline?: boolean;
}

export interface Embed {
  title?: string;
  description?: string;
  timestamp?: Date;
  color?: string;
  footer?: EmbedFooter;
  image?: EmbedImage;
  thumbnail?: EmbedThumbnail;
  video?: EmbedVideo;
  provider?: EmbedProvider;
  author?: EmbedAuthor;
  fields?: EmbedField[];
}
