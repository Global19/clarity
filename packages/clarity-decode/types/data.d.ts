import { Data } from "clarity-js";
import { DiagnosticEvent, ImageErrorEvent, LogEvent, ScriptErrorEvent } from "./diagnostic";
import { ClickEvent, InputEvent, InteractionEvent, PointerEvent, ResizeEvent } from "./interaction";
import { ScrollEvent, SelectionEvent, TimelineEvent, UnloadEvent, VisibilityEvent } from "./interaction";
import { DocumentEvent, DomEvent, LayoutEvent, RegionEvent } from "./layout";
import { ConnectionEvent, NavigationEvent } from "./performance";
import { PartialEvent } from "./core";

/* Redeclare enums */
export import Envelope = Data.Envelope;
export import Code = Data.Code;
export import Dimension = Data.Dimension;
export import Event = Data.Event;
export import Metric = Data.Metric;
export import Payload = Data.Payload;
export import BooleanFlag = Data.BooleanFlag;
export import Constant = Data.Constant;

/* Data Events */
export interface BaselineEvent extends PartialEvent { data: Data.BaselineData; }
export interface DimensionEvent extends PartialEvent { data: Data.DimensionData; }
export interface MetricEvent extends PartialEvent { data: Data.MetricData; }
export interface CustomEvent extends PartialEvent { data: Data.CustomData; }
export interface VariableEvent extends PartialEvent { data: Data.VariableData; }
export interface PingEvent extends PartialEvent { data: Data.PingData; }
export interface UpgradeEvent extends PartialEvent { data: Data.UpgradeData; }
export interface UploadEvent extends PartialEvent { data: Data.UploadData; }
export interface DataEvent extends PartialEvent {
    data: Data.BaselineData |
    Data.DimensionData | 
    Data.MetricData |
    Data.CustomData |
    Data.VariableData |
    Data.PingData |
    Data.UpgradeData |
    Data.UploadData;
}

export type DecodedEvent = DataEvent | DiagnosticEvent | InteractionEvent | LayoutEvent;

export interface DecodedPayload {
    timestamp: number;
    envelope: Data.Envelope;
    metric?: MetricEvent[];
    dimension?: DimensionEvent[];
    ping?: PingEvent[];
    image?: ImageErrorEvent[];
    script?: ScriptErrorEvent[];
    input?: InputEvent[];
    pointer?: PointerEvent[];
    click?: ClickEvent[];
    resize?: ResizeEvent[];
    scroll?: ScrollEvent[];
    selection?: SelectionEvent[];
    timeline?: TimelineEvent[];
    unload?: UnloadEvent[];
    upgrade?: UpgradeEvent[];
    upload?: UploadEvent[];
    visibility?: VisibilityEvent[];
    region?: RegionEvent[];
    dom?: DomEvent[];
    doc?: DocumentEvent[];
    connection?: ConnectionEvent[];
    navigation?: NavigationEvent[];
    log?: LogEvent[];
    baseline?: BaselineEvent[];
    variable?: VariableEvent[];
    custom?: CustomEvent[];
}

export interface DecodedVersion {
    major: number;
    minor: number;
    patch: number;
    beta: number;
}
