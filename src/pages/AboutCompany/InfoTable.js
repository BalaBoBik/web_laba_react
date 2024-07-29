import React from 'react';
import '../../css/table.css';
export class InfoTable extends React.Component
{
    render()
    {
        return(
            <div>
                <table>
                    <tr>
                        <td colspan="4">Страховка</td>
                    </tr>
                    <tr>
                        <td colspan="2">Плюсы</td>
                        <td colspan="2">Минусы</td>
                    </tr>
                    <tr>
                        <td>Безопасность</td>
                        <td>Надежность</td>
                        <td>Стоит денег</td>
                        <td>Больше нет</td>
                    </tr>
                    <tr>
                        <td>Увереность</td>
                        <td>Стабильность</td>
                        <td>Больше нет</td>
                        <td>Больше нет</td>
                    </tr>
                </table>
            </div>
        )
    }
}