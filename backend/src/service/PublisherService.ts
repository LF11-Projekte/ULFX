import {BaseService} from "./_BaseService";
import {appDataSource} from "../dataSource";
import {IPublisher, IPublisherKeyProps, IPublisherReferenceType} from "../types/IPublisher";
import {PublisherEntry} from "../db/entry/PublisherEntry";
import {UserEntry} from "../db/entry/UserEntry";
import {GroupEntry} from "../db/entry/GroupEntry";
import {ChannelEntry} from "../db/entry/ChannelEntry";
import {UserService} from "./UserService";
import {GroupService} from "./GroupService";
import {ChannelService} from "./ChannelService";
import {IUser} from "src/types/IUser";
import {IGroup} from "src/types/IGroup";
import {IChannel} from "src/types/IChannel";


export class PublisherService extends BaseService<PublisherEntry> {

    private userService = new UserService();
    private groupService = new GroupService();
    private channelService = new ChannelService();


    constructor() {
        super(appDataSource.getRepository(PublisherEntry));
    }


    public async create(publisherProps: IPublisherKeyProps) : Promise<IPublisher> {

        let
            userReference: UserEntry | null = null,
            groupReference: GroupEntry | null = null,
            channelReference: ChannelEntry | null = null;

        switch(publisherProps.referenceType) {

            case IPublisherReferenceType.USER:
                userReference = await this.userService.getById(publisherProps.userReference?.id as string);
                if(!userReference) throw Error("USER_NOT_FOUND");
                break;
            
            case IPublisherReferenceType.CHANNEL:
                channelReference = await this.channelService.getById(publisherProps.channelReference?.id as string);
                if(!channelReference) throw Error("USER_NOT_FOUND");
                break;

            case IPublisherReferenceType.GROUP:
                groupReference = await this.groupService.getById(publisherProps.groupReference?.id as string);
                if(!groupReference) throw Error("USER_NOT_FOUND");
                break;
        }

        let publisher = this.repository.create({
            creationDate: new Date(),
            updateDate: new Date(),
            referenceType: publisherProps.referenceType,
            userReference: userReference as IUser,
            groupReference: groupReference as IGroup,
            channelReference: channelReference as IChannel          
        });

       publisher = await this.repository.save(publisher);

       return publisher;
    }

}
