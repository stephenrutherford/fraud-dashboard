import React from 'react';
import { Flex } from '@chakra-ui/core';
import styles from '../styles/TableShort.module.css';

function TableShort() {
    return (
        // <Flex bg="teal.500" mw="100%">
            <table className={styles.table}>
                <thead>
                <tr>
                    <th className={styles.table}>Product</th>
                    <th className={styles.table}>Sub-Product</th>
                    <th className={styles.table}>Reson</th>
                    <th className={styles.table}>Count</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className={styles.table}>Product 1</td>
                    <td className={styles.table}>
                        <table>
                            <tr>
                                <td>Sub-Product 1</td>
                            </tr>
                            <tr>
                                <td>Sub-Product 2</td>
                            </tr>
                        </table>
                    </td>
                    <td className={styles.table}>
                        <table>
                            <tr>
                                <td>Reason 1</td>
                            </tr>
                            <tr>
                                <td>Reason 2</td>
                            </tr>
                        </table>
                    </td>
                    <td className={styles.table}>
                        <table>
                            <tr>
                                <td>{Math.floor(Math.random() * 201)+1}</td>
                            </tr>
                            <tr>
                                <td>{Math.floor(Math.random() * 201)+1}</td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td className={styles.table}>Product 2</td>
                    <td className={styles.table}>
                        <table>
                            <tr>
                                <td>Sub-Product 1</td>
                            </tr>
                            <tr>
                                <td>Sub-Product 2</td>
                            </tr>
                        </table>
                    </td>
                    <td className={styles.table}>
                        <table>
                            <tr>
                                <td>Reason 1</td>
                            </tr>
                            <tr>
                                <td>Reason 2</td>
                            </tr>
                        </table>
                    </td>
                    <td className={styles.table}>
                        <table>
                            <tr>
                                <td>{Math.floor(Math.random() * 201)+1}</td>
                            </tr>
                            <tr>
                                <td>{Math.floor(Math.random() * 201)+1}</td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td className={styles.table}>Product 3</td>
                    <td className={styles.table}>
                        <table>
                            <tr>
                                <td>Sub-Product 1</td>
                            </tr>
                            <tr>
                                <td>Sub-Product 2</td>
                            </tr>
                        </table>
                    </td>
                    <td className={styles.table}>
                        <table>
                            <tr>
                                <td>Reason 1</td>
                            </tr>
                            <tr>
                                <td>Reason 2</td>
                            </tr>
                        </table>
                    </td>
                    <td className={styles.table}>
                        <table>
                            <tr>
                                <td>{Math.floor(Math.random() * 201)+1}</td>
                            </tr>
                            <tr>
                                <td>{Math.floor(Math.random() * 201)+1}</td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td className={styles.table}>Product 4</td>
                    <td className={styles.table}>
                        <table>
                            <tr>
                                <td>Sub-Product 1</td>
                            </tr>
                            <tr>
                                <td>Sub-Product 2</td>
                            </tr>
                        </table>
                    </td>
                    <td className={styles.table}>
                        <table>
                            <tr>
                                <td>Reason 1</td>
                            </tr>
                            <tr>
                                <td>Reason 2</td>
                            </tr>
                        </table>
                    </td>
                    <td className={styles.table}>
                        <table>
                            <tr>
                                <td>{Math.floor(Math.random() * 201)+1}</td>
                            </tr>
                            <tr>
                                <td>{Math.floor(Math.random() * 201)+1}</td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td className={styles.table}>Product 5</td>
                    <td className={styles.table}>
                        <table>
                            <tr>
                                <td>Sub-Product 1</td>
                            </tr>
                            <tr>
                                <td>Sub-Product 2</td>
                            </tr>
                        </table>
                    </td>
                    <td className={styles.table}>
                        <table>
                            <tr>
                                <td>Reason 1</td>
                            </tr>
                            <tr>
                                <td>Reason 2</td>
                            </tr>
                        </table>
                    </td>
                    <td className={styles.table}>
                        <table>
                            <tr>
                                <td>{Math.floor(Math.random() * 201)+1}</td>
                            </tr>
                            <tr>
                                <td>{Math.floor(Math.random() * 201)+1}</td>
                            </tr>
                        </table>
                    </td>
                </tr>
                </tbody>
            </table>
        // </Flex>
    )
}

export default TableShort
