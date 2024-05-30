import {ChannelEntry} from "../db/entry/ChannelEntry";
import {BaseService} from "./_BaseService";
import {appDataSource} from "../dataSource";
import {CreateIChannelProps, IChannel} from "../types/IChannel";

export class ChannelService extends BaseService<ChannelEntry> {
    constructor() {
        super(appDataSource.getRepository(ChannelEntry));
    }

    public async create(channelProps: CreateIChannelProps) : Promise<IChannel> {
       let channel = this.repository.create({
           creationDate : new Date(),
           updateDate : new Date(),
           ...channelProps
       }) as IChannel;

       channel = await this.repository.save(channel);

       return channel;
    }

}
