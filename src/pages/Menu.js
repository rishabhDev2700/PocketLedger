import React from 'react'
import { TileWrapper } from '../components/MenuTiles';
import { GrTransaction } from 'react-icons/gr';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { IoStatsChartSharp, IoSettingsOutline } from 'react-icons/io5';
import { Tile } from './../components/Tile';
import { LogoutTile } from '../components/LogoutTile';
export const Menu = () => {
    return (
        <TileWrapper>
            <Tile to='/transactions'><GrTransaction /><span>Transactions</span></Tile>
            <Tile to='/insights'><IoStatsChartSharp /><span>Insights</span></Tile>
            <Tile to='/settings'><IoSettingsOutline /><span>Settings</span></Tile>
            <LogoutTile><RiLogoutCircleLine /><span>Logout</span></LogoutTile>
        </TileWrapper>)
}
