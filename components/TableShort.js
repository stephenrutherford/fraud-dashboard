import React from 'react';
import { Flex } from '@chakra-ui/core';
import styles from '../styles/TableShort.module.css';

function TableShort() {
    return (
        // <Flex bg="teal.500" mw="100%">
            <table className={styles.table}>
                <thead>
                <tr>
                    <th className={styles.table}>Type</th>
                    <th className={styles.table}>Val1</th>
                    <th className={styles.table}>Val2</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className={styles.table}>Type 1</td>
                    <td className={styles.table}>{Math.floor(Math.random() * 201)+1}</td>
                    <td className={styles.table}>{Math.floor(Math.random() * 201)+1}</td>
                </tr>
                <tr>
                    <td className={styles.table}>Type 2</td>
                    <td className={styles.table}>{Math.floor(Math.random() * 201)+1}</td>
                    <td className={styles.table}>{Math.floor(Math.random() * 201)+1}</td>
                </tr>
                <tr>
                    <td className={styles.table}>Type 3</td>
                    <td className={styles.table}>{Math.floor(Math.random() * 201)+1}</td>
                    <td className={styles.table}>{Math.floor(Math.random() * 201)+1}</td>
                </tr>
                <tr>
                    <td className={styles.table}>Type 4</td>
                    <td className={styles.table}>{Math.floor(Math.random() * 201)+1}</td>
                    <td className={styles.table}>{Math.floor(Math.random() * 201)+1}</td>
                </tr>
                </tbody>
            </table>
        // </Flex>
    )
}

export default TableShort
