export enum GatewayOpcodes {
    Dispatch = 0,
    Heartbeat = 1,
    Identify = 2,
    PresenceUpdate = 3,
    VoiceStateUpdate = 4,
    Resume = 6,
    Reconnnect = 7,
    RequestGuildMembers = 8,
    InvalidSession = 9,
    Hello = 10,
    HeartbeatACK = 11,
}

export enum GatewayCloseEventCodes {
    UnknownError = 4000,
    UnknownOpcode = 4001,
    DecodeError = 4002,
    NotAuthenticated = 4003,
    AuthenticationFailed = 4004,
    AlreadyAuthenticated = 4005,
    InvalidSequence = 4007,
    RateLimited = 4008,
    SessionTimedOut = 4009,
    InvalidShard = 4010,
    ShardingRequired = 4011,
    InvalidAPIVersion = 4012,
    InvalidIntents = 4013,
    DisallowedIntents = 4014,
}

export enum GatewayIntents {
    Guilds = 1 << 0,
    GuildMembers = 1 << 1,
    GuildBans = 1 << 2,
    GuildEMojisAndStickers = 1 << 3,
    GuildIntegrations = 1 << 4,
    GuildWebhooks = 1 << 5,
    GuildInvites = 1 << 6,
    GuildVoiceStates = 1 << 7,
    GuildPresences = 1 << 8,
    GuildMessages = 1 << 9,
    GuildMessageReactions = 1 << 10,
    GuildMessageTyping = 1 << 11,
    DirectMessages = 1 << 12,
    DirectMessageReactions = 1 << 13,
    DirectMessageTyping = 1 << 14,
    MessageContent = 1 << 15,
    GuildScheduledEvents = 1 << 16,
    AutoModerationConfiguration = 1 << 20,
    AutoModerationExecution = 1 << 21,
}

export enum ReadyState {
    Connecting = 0,
    Open = 1,
    Closing = 2,
    Closed = 3,
}

export type Snowflake = string;

export type DiscordAPITeam = {};

export type DiscordAPIInstallParams = {};

export type DiscordAPIApplication = {
    id: Snowflake;
    name: string;
    icon: string | null;
    description: string;
    rpc_origins?: string[];
    bot_public: boolean;
    bot_require_code_grant: boolean;
    terms_of_service_url?: string;
    privacy_policy_url?: string;
    owner?: DiscordAPIUser;
    team: DiscordAPITeam | null;
    guild_id?: Snowflake;
    primary_sku_id?: Snowflake;
    slug?: string;
    cover_image?: string;
    flags?: number;
    tags?: string[];
    install_params?: DiscordAPIInstallParams;
    custom_install_url?: string;
};
export type DiscordAPIRoleTag = {
    bot_id?: Snowflake;
    integration_id?: Snowflake;
    premium_subscriber?: null;
};

export type DiscordAPIRole = {
    id: Snowflake;
    name: string;
    color: number;
    hoist: boolean;
    icon?: string | null;
    unicode_emoji?: string | null;
    position: number;
    permissions: string;
    managed: boolean;
    mentionable: boolean;
    tags?: DiscordAPIRoleTag;
};

export type DiscordAPIEmoji = {
    id: Snowflake | null;
    name: string | null;
    roles: Snowflake[];
    user?: DiscordAPIUser;
    require_colons?: boolean;
    managed?: boolean;
    animated?: boolean;
    available?: boolean;
};

export enum DiscordAPIFeature {
    AnimatedBanner = "ANIMATED_BANNER",
    AnimatedIcon = "ANIMATED_ICON",
    AutoModeration = "AUTO_MODERATION",
    Banner = "BANNER",
    Community = "COMMUNITY",
    Discoverable = "DISCOVERABLE",
    Featurable = "FEATURABLE",
    InviteSplash = "INVITE_SPLASH",
    MemberVerificationGateEnabled = "MEMBER_VERIFICATION_GATE_ENABLED",
    MonetizationEnabled = "MONETIZATION_ENABLED",
    MoreStickers = "MORE_STICKERS",
    News = "NEWS",
    Partnered = "PARTNERED",
    PreviewEnabled = "PREVIEW_ENABLED",
    PrivateThreads = "PRIVATE_THREADS",
    RoleIcons = "ROLE_ICONS",
    TicketedEventsEnabled = "TICKETED_EVENTS_ENABLED",
    VanityURL = "VANITY_URL",
    Verified = "VERIFIED",
    VIPRegions = "VIP_REGIONS",
    WelcomeScreenEnabled = "WELCOME_SCREEN_ENABLED",
}

export type DiscordAPIWelcomeScreenChannel = {
    channel_id: Snowflake;
    description: string;
    emoji_id: Snowflake | null;
    emoji_name: string | null;
};

export type DiscordAPIWelcomeScreen = {
    description: string | null;
    welcome_channels: DiscordAPIWelcomeScreenChannel[];
};

export type DiscordAPIUser = {
    id: Snowflake;
    username: string;
    discriminator: string;
    avatar: string | null;
    bot?: boolean;
    system?: boolean;
    mfa_enabled?: boolean;
    banmner?: string | null;
    accent_color?: string | null;
    locale?: string;
    verified?: boolean;
    email?: string | null;
    flags?: number;
    premium_type?: number;
    public_flags?: number;
};

export type DiscordAPISticker = {
    id: Snowflake;
    pack_id?: Snowflake;
    name: string;
    description: string | null;
    tags: string;
    asset?: string;
    type: number;
    format_type: number;
    available?: boolean;
    guild_id?: Snowflake;
    user?: DiscordAPIUser;
    sort_value?: number;
};

export type DiscordAPIVoiceState = {
    guild_id?: Snowflake;
    channel_id: Snowflake | null;
    user_id: Snowflake;
    member?: DiscordAPIGuildMember;
    session_id: string;
    deaf: boolean;
    mute: boolean;
    self_deaf: boolean;
    self_mute: boolean;
    self_stream?: boolean;
    self_video: boolean;
    suppress: boolean;
    request_to_speak_timestamp: Date | null;
};

export type DiscordAPIGuildMember = {
    user?: DiscordAPIUser;
    nick?: string | null;
    avatar?: string | null;
    roles: Snowflake[];
    joined_at: Date;
    premium_since?: Date | null;
    deaf: boolean;
    mute: boolean;
    pending?: boolean;
    permissions?: string;
    communication_disabled_until?: Date;
};

export type DiscordAPIThreadMetadata = {};

export type DiscordAPIThreadMember = {};

export type DiscordAPIDefaultReaction = {};

export type DiscordAPIChannel = {
    id: Snowflake;
    type: number;
    guild_id: Snowflake;
    position?: number;
    permission_overwrites?: DiscordAPIOverwrite[];
    name?: string | null;
    topic?: string | null;
    nsfw?: boolean;
    last_message_id?: Snowflake | null;
    bitrate?: number;
    user_limit?: number;
    rate_limit_per_user?: number;
    recipients?: DiscordAPIUser[];
    icon?: string | null;
    owner_id?: Snowflake;
    application_id?: Snowflake;
    parent_id?: Snowflake | null;
    last_pin_timestamp?: Date | null;
    rtc_region?: string | null;
    video_quality_mode?: number;
    message_count?: number;
    member_count?: number;
    thread_metadata?: DiscordAPIThreadMetadata;
    member?: DiscordAPIThreadMember;
    default_auto_archive_duration?: number;
    permissions?: string;
    flags?: number;
    total_messages_sent?: number;
    available_tags?: Snowflake[];
    default_reaction_emoji: DiscordAPIDefaultReaction | null;
    default_thread_rate_limit_per_user?: number;
    version: number;
};

export type DiscordAPIOverwrite = {};
export type DiscordAPIPresenceUpdate = {};

export type DiscordAPIStageInstance = {};

export type DiscordAPIGuildScheduledEvent = {};

export enum DiscordAPIGuildVerificationLevel {
    NONE = 0,
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,
    VERY_HIGH = 4,
}

export enum DiscordAPICommandOptionType {
    SubCommand = 1,
    SubCommandGroup = 2,
    String = 3,
    Integer = 4,
    Boolean = 5,
    User = 6,
    Channel = 7,
    Role = 8,
    Mentionable = 9,
    Number = 10,
    Attachment = 11,
}

export enum DiscordAPILocale { }

export type DiscordAPIGuild = {
    id: Snowflake;
    name: string;
    icon: string | null;
    icon_hash?: string | null;
    splash: string | null;
    discovery_splash: string | null;
    owner?: boolean;
    owner_id: Snowflake;
    permissions?: string;
    region?: string | null;
    afk_channel_id: Snowflake | null;
    afk_timeout: number;
    widget_enabled?: boolean;
    widget_channel_id?: Snowflake | null;
    verification_level: DiscordAPIGuildVerificationLevel;
    default_message_notifications: number;
    explicit_content_filter: number;
    roles: DiscordAPIRole[];
    emojis: DiscordAPIEmoji[];
    features: DiscordAPIFeature[];
    mfa_level: number;
    application_id: Snowflake | null;
    system_channel_id: Snowflake | null;
    system_channel_flags: number;
    rules_channel_id: Snowflake | null;
    max_presences?: number | null;
    max_members?: number;
    vanity_url_code: string | null;
    description: string | null;
    banner: string | null;
    premium_tier: number;
    premium_subscription_count?: number;
    preferred_locale: string;
    public_updates_channel_id: Snowflake | null;
    max_video_channel_users?: number;
    approximate_member_count?: number;
    approximate_presence_count?: number;
    welcome_screen?: DiscordAPIWelcomeScreen;
    nsfw_level: number;
    stickers?: DiscordAPISticker[];
    premium_progress_bar_Enabled: boolean;

    joined_at: Date;
    large: boolean;
    unavailable?: boolean;
    member_count: number;
    voice_states: DiscordAPIVoiceState[];
    members: DiscordAPIGuildMember[];
    channels: DiscordAPIChannel[];
    presences: DiscordAPIPresenceUpdate[];
    stage_instances: DiscordAPIStageInstance[];
    guild_scheduled_events: DiscordAPIGuildScheduledEvent[];
};

export type DiscordAPIResolvedData = {};

export type DiscordAPIApplicationCommandInteractionDataOption = {
    name: string;
    type: number;
    value?: string | number;
    options?: DiscordAPIApplicationCommandInteractionDataOption[];
    focused?: boolean;
};

export enum DiscordAPIButtonComponentButtonStyleType {
    Primary = 1,
    Secondary = 2,
    Success = 3,
    Danger = 4,
    Link = 5,
}

export enum DiscordAPIInteractionType {
    Ping = 1,
    ApplicationCommand = 2,
    MessageComponent = 3,
    ApplicationCommandAutocomplete = 4,
    ModalSubmit = 5,
}

export enum DiscordAPIMessageComponentType {
    ActionRow = 1,
    Button = 2,
    StringSelect = 3,
    TextInput = 4,
    UserSelect = 5,
    RoleSelect = 6,
    MentionableSelect = 7,
    ChannelSelect = 7,
}
export type DiscordAPIInteractionData = {
    id: Snowflake;
    name: string;
    type: number;
    resolved?: DiscordAPIResolvedData;
    options?: DiscordAPIApplicationCommandInteractionDataOption[];
    guild_id?: Snowflake;
    target_id?: Snowflake;
};

export type DiscordAPIChannelMention = {};

export type DiscordAPIAttachment = {};

export type DiscordAPIEmbed = {};

export type DiscordAPIReaction = {};

export type DiscordAPIMessageActivity = {};

export type DiscordAPIPartialApplication = {};

export type DiscordAPIMessageReference = {};

export type DiscordAPIMessageInteraction = {};

export type DiscordAPIMessageComponent = {};

export type DiscordAPIMessageStickerItem = {};

export type DiscordAPIMessage = {
    id: Snowflake;
    channel_id: Snowflake;
    author: DiscordAPIUser;
    content: string;
    timestamp: Date;
    edited_timestamp: Date;
    tts: boolean;
    mention_everyone: boolean;
    mentions: DiscordAPIUser[];
    mention_roles: DiscordAPIRole[];
    mention_channels: DiscordAPIChannelMention;
    attachments: DiscordAPIAttachment[];
    embeds: DiscordAPIEmbed[];
    reactions: DiscordAPIReaction[];
    nonce?: number | string;
    pinned: boolean;
    webhook_id?: Snowflake;
    type: number;
    activity?: DiscordAPIMessageActivity;
    application?: DiscordAPIPartialApplication;
    application_id?: Snowflake;
    message_reference?: DiscordAPIMessageReference;
    flags?: number;
    referenced_message?: DiscordAPIMessage | null;
    interaction?: DiscordAPIMessageInteraction;
    thread?: DiscordAPIChannel;
    components?: DiscordAPIMessageComponent[];
    sticker_items?: DiscordAPIMessageStickerItem[];
    stickers?: DiscordAPISticker[];
    position?: number;
};

export type DiscordAPIInteraction = {
    id: Snowflake;
    application_id: Snowflake;
    type: DiscordAPIInteractionType;
    data?: DiscordAPIInteractionData;
    guild_id?: Snowflake;
    channel_id?: Snowflake;
    member?: DiscordAPIGuildMember;
    user?: DiscordAPIUser;
    token: string;
    version: number;
    message?: DiscordAPIMessage;
    app_permissions?: string;
    locale?: DiscordAPILocale
    guild_locale?: string;
};
